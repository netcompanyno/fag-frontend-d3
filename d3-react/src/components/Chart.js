import React, {Component} from 'react';
import '../css/Chart.css'
import Norway from 'norway.js';
import d3 from 'd3';

export default class Chart extends Component {

  componentDidMount() {
    const el = document.getElementById("norge");

    const debounce = function (fn, wait = 10) {
      let timeout;
      return function () {
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), wait);
      };
    };

    const norway = new Norway(el, {area: Norway.Municipalities});

    const size = () => el.style.height = document.body.parentNode.clientHeight + "px";
    size();
    window.onresize = debounce(size);

    norway.on('load', () => {
      const areas = norway.areas();
      for (let area of areas) {
        let el = document.getElementById('area_' + area.id)
        el.style.fill = getRandomColor();
      }

      norway.on('selected', area => {

      });
    });

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
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
