<template>
  <section aria-labelledby="types">
    <h3 id="types">Types of bear</h3>
    <table>
      <caption tabindex="0">
        Comparison of wild bears and urban bears, showing coat color, size,
        habitat, lifespan, and diet.
      </caption>
      <thead>
        <tr>
          <th id="col-type" scope="col" tabindex="0">Bear Type</th>
          <th id="col-coat" scope="col" tabindex="0">Coat</th>
          <th id="col-size" scope="col" tabindex="0">Adult size</th>
          <th id="col-habitat" scope="col" tabindex="0">Habitat</th>
          <th id="col-life" scope="col" tabindex="0">Lifespan</th>
          <th id="col-diet" scope="col" tabindex="0">Diet</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th id="row-wild" scope="row" tabindex="0">Wild</th>
          <td
            tabindex="0"
            aria-labelledby="row-wild col-coat"
            aria-label="column 1 Wild, row 1 Coat, Brown or black"
          >
            Brown or black
          </td>
          <td
            tabindex="0"
            aria-labelledby="row-wild col-size"
            aria-label="column 1 Wild, row 2 Adult Size, 1.4 to 2.8 meters"
          >
            1.4 to 2.8 meters
          </td>
          <td
            tabindex="0"
            aria-labelledby="row-wild col-habitat"
            aria-label="column 1 Wild, row 3 Habitat, Woods and forests"
          >
            Woods and forests
          </td>
          <td
            tabindex="0"
            aria-labelledby="row-wild col-life"
            aria-label="column 1 Wild, row 4 Lifespan, 25 to 28 years"
          >
            25 to 28 years
          </td>
          <td
            tabindex="0"
            aria-labelledby="row-wild col-diet"
            aria-label="column 1 Wild, row 5 Diet, Fish, meat, plants"
          >
            Fish, meat, plants
          </td>
        </tr>
        <tr>
          <th id="row-urban" scope="row" tabindex="0">Urban</th>
          <td
            tabindex="0"
            aria-label="column 2 Urban, row 1 Coat, North Face"
          >
            North Face
          </td>
          <td
            tabindex="0"
            aria-label="column 2 Urban, row 2 Adult Size, 18 to 22"
          >
            18 to 22
          </td>
          <td
            tabindex="0"
            aria-label="column 2 Urban, row 3 Habitat, Condos and coffee shops"
          >
            Condos and coffee shops
          </td>
          <td
            tabindex="0"
            aria-label="column 2 Urban, row 4 Lifespan, 20 to 32 years"
          >
            20 to 32 years
          </td>
          <td
            tabindex="0"
            aria-label="column 2 Urban, row 5 Diet, Starbucks, sushi"
          >
            Starbucks, sushi
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>


<style scoped>


    table{
        width: 100%;
        background-color: #dde;
        border-collapse: collapse;
        font-family: 'Open Sans Condensed', sans-serif;
        color: #2a2a2a;
        box-sizing: border-box;
        text-indent: initial;
        unicode-bidi: isolate;
        border-spacing: 2px;
        border-color: gray;
        display: table;
    }
    thead{
        display: table-header-group;
        vertical-align: middle;
        unicode-bidi: isolate;
        border-color: inherit;
    }
    tbody{
        display: table-row-group;
        vertical-align: middle;
        unicode-bidi: isolate;
        border-color: inherit;
    }
    thead tr{
        display: table-row;
        vertical-align: inherit;
        unicode-bidi: isolate;
        border-color: inherit;
    }
    tbody tr{
        background-color: #def;
        display: table-row;
        vertical-align: inherit;
        unicode-bidi: isolate;
        border-color: inherit;
    }

    td{
        text-align: center;
        padding: 10px;
        display: table-cell;
        vertical-align: inherit;
        unicode-bidi: isolate;
    }

    th{
        text-align: center;
        padding: 10px;
        display: table-cell;
        vertical-align: inherit;
        unicode-bidi: isolate;
    }

    caption {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    :deep(tbody tr:nth-child(odd)) {
    background-color: #def;
    }

    

</style>