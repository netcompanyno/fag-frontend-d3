import React, {Component} from 'react';
import '../css/Chart.css'
import Norway from 'norway.js';
import d3 from 'd3';

export default class Chart extends Component {

    componentDidMount() {
        const el = document.getElementById("norge");
        const $ = sel => document.querySelector(sel);
        const randomize = (arr) => arr.sort(() => .5 - Math.random());
        const first = (arr) => arr[0];
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

            let questions = randomize(areas);
            let expected = ask(questions);
            let corrects = 0;

            norway.on('selected', area => {
                const correct = (area.id === expected.id);
                norway.addClass(area, correct ? 'correct' : 'fail');
                corrects += correct ? 1 : 0;

                if (questions.length == 0) {
                    if (done) {
                        return
                    }
                    done = true;

                    const winner = (corrects === areas.length);
                    alert(winner ? "You won!" : "You got " + corrects + " of " + areas.length);
                }
                else {
                    questions = questions.slice(1);
                    expected = ask(questions);
                }
            });
        });
        const areaEl = document.getElementById("valgt");

        function ask(questions) {
            const expected = first(questions);
            areaEl.innerText = `Velg ${expected.name}`;
            return expected;
        }
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
