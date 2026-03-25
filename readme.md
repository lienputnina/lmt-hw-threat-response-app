# Overview

This is a app that processes flying objects, determines whether they are threats and, if they are, tells you which mode of interception to choose for disabling them.

## The problem and its possible solution

There are a lot of flying objects in the Latvian airspace, but not all of them are threats to the country's safety. We need a program that could tell us, which ones are dangerous and how to intercept them, e.g. - what defense solution we should use.

### What is known prior to creating the solution

We know the types of defense solutions that are available to us, including their speed, range of operations, max altitude they can fly in as well as their price. We also know the coordinates of our military base and the range of its radar. All of that will determine, which flying objects we can detect and what will be a suitable mode of interception for the potential threats.

### The possible solution

To determine which defense solution we should use, we need a program that takes in the speed, altitude, bearing (the direction the object is heading) as well as the latitude and longitude of the object. We might also need to know the time when the threat was detected.

#### The use of the data described above

- Speed - which of our vehicles will have time to catch the threats
- Altitude - which of our vehicles can fly high enough to catch the threats
- Bearing - in which direction our vehicles should fly to catch the threats
- Latitude and longitude - where the objects are at any given moment

#### Implementation

1. Create data objects that have the following properties - speed_ms, altitude_m, heading_deg (bearing), latitude, longitude, report_time (when was this threat spotted). Since we need to send new data every second, we might need a function that generates
2. Create a function that takes in the previously generated data object, reads its properties, gives us the threat level (not a threat, caution, threat etc.), gives us the type of interceptor to disable it with.
3. Create a map that displays all the flying objects (including threats)
4. Add a button to start the classification process
5. Put the location of the military base and the interceptors in a database
6. Put everything in a Docker container for ease of use.

## Running the app

TBD
