package no.asperheim.yrjsonlizr.api.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import no.asperheim.yrjsonlizr.api.model.County;
import no.asperheim.yrjsonlizr.api.model.Place;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;


/**
 * Created by andersa@netcompany.com at 13/06/2018
 */

@Service
public class PlaceService {

    private static List<Place> placeList;

    @Autowired
    private XmlService xmlService;

    @PostConstruct
    private void init() {
        ObjectMapper mapper = new ObjectMapper();
        TypeReference<List<Place>> mapType = new TypeReference<List<Place>>() {};
        try {
            InputStream is = new ClassPathResource("places.json").getInputStream();

            if (placeList == null)
                placeList = mapper.readValue(is, mapType);

        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }

    public List<Place> getPlaces() {
        return placeList;
    }


    public List<County> getWeatherForCounties(List<String> counties) {
        List<County> info = new ArrayList<>();

        for(String county: counties) {
          Place result = findCountyByName(county);
          info.add(getWeather(result));
        }
        return info;
    }

    private Place findCountyByName(String name){
        return placeList
                .stream()
                .filter(x -> x.getName().equals(name))
                .findFirst().get();
    }

     private County getWeather(Place place) {
        String xmlString = xmlService.getXmlFromYr(place.getLink());
        Map forecast = (Map)xmlService.marshallXmlString(xmlString);
        return new County(place, xmlService.getTempuratureFromXmlMap(forecast));
    }
}
