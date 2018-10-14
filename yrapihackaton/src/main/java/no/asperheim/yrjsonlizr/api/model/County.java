package no.asperheim.yrjsonlizr.api.model;

/**
 * Created by andersa@netcompany.com at 13/06/2018
 */
public class County {
    private String county;
    private int temperature;

    public County(final Place place, final int temperature) {
        this.county = place.getName();
        this.temperature = temperature;
    }

    public Object getCounty() {
        return county;
    }

    public int getTemperature() {
        return temperature;
    }

}
