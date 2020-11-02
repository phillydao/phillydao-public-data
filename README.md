![DAO Logo](https://data.philadao.com/assets/images/dao_logo.svg)

Welcome to the public data repository for the [Philadelphia District Attorney's Office](https://www.phila.gov/districtattorney/pages/default.aspx).  This repository and the data contained within are the product of the hard work of the the District Attorney's Transparency Analytics (DATA) Lab.  Among our many tasks, we try to make visible to the public the workings of the criminal justice system in Philadelphia.

Our main public product is the DA's [Public Data Dashboard](https://data.philadao.com).  The Dashboard is designed to be understandable by members of the public who may not be steeped in criminal justice terminology, while also containing enough depth and data to appeal to those who want to dig deeper.  In addition to reports on [Incidents](https://data.philadao.com/Incidents_Report.html), [Arrests](https://data.philadao.com/Arrests_Report.html), [Charges Filed](https://data.philadao.com/Chargess_Report.html), [Case Outcomes](https://data.philadao.com/Outcomes_Report.html), and a variety of other pages, we also provide more [detailed data that can be downloaded](https://data.philadao.com/download.html).

This repository contains three things of note:

1. __The static html code that runs the dashboard (which is itself served using [github pages](https://pages.github.com)__.  To create the pages, we have a nightly ETL process run on a DAO server that compiles the data we use to create these pages and then a secondary process that uses knitr to knit a series of RMarkdown files into static html files.  These static html files are pushed to this repository daily.
2. __The downloadable data__. As we create the website, we also save off csvs of some of the dataframes that are used in the RMarkdown.  Those are uploaded here with the daily build.  An advantage of hosting these files on github is that it allows the public to see how our data may have changed over time, both when we change our methodology for certain statistics as well as when the underlying data changes because of ongoing court processes.
3. __Publicly downloadable code__.  As we write data stories using our own public data, we post the code that we used to generate our graphs, etc... to this page so that others can check our work as well as have a headstart on their own data projects.

Please [let us know](mailto:justice@phila.gov) if there is more that you would like to see.
