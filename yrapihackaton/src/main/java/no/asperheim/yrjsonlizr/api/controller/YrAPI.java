package no.asperheim.yrjsonlizr.api.controller;

import no.asperheim.yrjsonlizr.api.model.CountyList;
import no.asperheim.yrjsonlizr.api.model.Place;
import no.asperheim.yrjsonlizr.api.model.County;
import no.asperheim.yrjsonlizr.api.service.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by andersa@netcompany.com at 13/06/2018
 */
@RestController
public class YrAPI {

    @Autowired
    private PlaceService placeService;


    @RequestMapping("/places")
    public List<Place> getPlaces() {
        return placeService.getPlaces();
    }


    @RequestMapping("/counties")
    public List<County> getWeatherForCounties(@RequestBody CountyList list) {
        return placeService.getWeatherForCounties(list.getCounties());
    }
}
