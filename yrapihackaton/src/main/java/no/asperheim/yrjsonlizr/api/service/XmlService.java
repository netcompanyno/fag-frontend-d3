package no.asperheim.yrjsonlizr.api.service;

import java.io.IOException;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.dataformat.xml.XmlMapper;

/**
 * TODO
 *
 * @author Andreas Kemkers
 */

@Service
public class XmlService {

    int getTempuratureFromXmlMap(final Map xml) {
        Map forecast = (Map)xml.get("forecast");
        Map tabular = (Map)forecast.get("tabular");
        Map time = (Map)tabular.get("time");
        Map temperature = (Map)time.get("temperature");
        return Integer.parseInt((String)temperature.get("value"));
    }

    Object marshallXmlString(String xmlInput){
        XmlMapper xmlMapper = new XmlMapper();
        try {
            return xmlMapper.readValue(xmlInput, Object.class);
        } catch (IOException e) {
            return "";
        }
    }

    String getXmlFromYr(String url) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, String.class);
    }
}
