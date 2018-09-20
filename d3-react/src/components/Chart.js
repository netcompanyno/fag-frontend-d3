import React, {Component} from 'react';
import '../css/Chart.css'
import Norway from 'norway.js';
import d3 from 'd3';

export default class Chart extends Component {

    componentDidMount() {
        const el = document.getElementById("norge");

        const debounce = function(fn, wait = 10) {
            let timeout;
            return function() {
                var args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(() => fn.apply(this, args), wait);
            };
        };

        const norway = new Norway(el, {area: Norway.Counties});

        const size = () => el.style.height = document.body.parentNode.clientHeight + "px";
        size();
        window.onresize = debounce(size);

        let done = false;

        norway.on('load', () => {
            const areas = norway.areas();


            norway.on('selected', area => {

            });
        });

        const areaEl = document.getElementById("valg");

        //document.getElementById("area-16").setAttribute("fill", "white");

    }

    render() {
        return (
            <div>
                <p id={"valgt"}></p>
                <div id={"norge"}/>
                <svg className={"d3-svg"} width="300px" height="150px">
                    <rect x="70" y="20" width="20px" height="20" rx="5" ry="5"/>
                    <rect x="140" y="20" width="20px" height="20" rx="5" ry="5"/>
                    <rect x="210" y="20" width="20px" height="20" rx="5" ry="5"/>
                </svg>

            </div>
        )
    }
}
