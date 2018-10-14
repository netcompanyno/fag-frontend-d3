package no.asperheim.yrjsonlizr.api.model;

import java.util.List;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

/**
 * TODO
 *
 * @author Andreas Kemkers
 */

@JsonDeserialize
public class CountyList {

    private List<String> counties;

    public List<String> getCounties() {
        return counties;
    }
}
