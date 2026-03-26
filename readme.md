# Greeting

Hello, dear reviewer/-s!

I have tried my best to do as much as I can up until this moment, but, unfortunately, this project is still a work in progress. At the time of writing, I have partially completed the main logic for the threat classification, but things like unit tests, SQL database and Docker are yet to be implemented. There is no map either - just a lonely button and a title (_"these are not the features you are looking for", said Qui-Gon_).

I plan to keep working on this project up until the evening of today. Thank you for your patience and have a nice day!

## The problem and the potential solution

There are a lot of flying objects in the Latvian airspace, but not all of them are threats to the country's safety. We need software that could tell us, which ones are dangerous and how to intercept them, e.g. - what defense solution we should use.

### What we know

We know the types of defense solutions that are available to us, including their speed, range of operations, max altitude they can fly in as well as their price. We also know the coordinates of our military base and the range of its radar. All of that will determine, which flying objects we can detect and what will be a suitable mode of interception for the potential threats.

### The solution

To determine which defense solution we should use, we need a program that takes in the speed, altitude, bearing (the direction the object is heading) as well as the latitude and longitude of the object. We might also need to know the time when the threat was detected.

#### The use of the data described above

- Speed - which of our vehicles will have time to catch the threats
- Altitude - which of our vehicles can fly high enough to catch the threats
- Bearing - in which direction our vehicles should fly to catch the threats
- Latitude and longitude - where the objects are at any given moment

#### Implementation

1. Create data objects that have the following properties - speed_ms, altitude_m, heading_deg (bearing), latitude, longitude, report_time (when was this threat spotted). Since we need to send new data every second, we might need a function that generates data objects in real-time
2. Create a function that takes in the previously generated data object, reads its properties, gives us the threat level ("not a threat", "caution", "threat") and tells us what kind of defense solution we should use
3. Create a map that displays all the flying objects (including threats)
4. Add a button to start the classification process
5. Put the location of the military base and the interceptors in a database
6. Put everything in a Docker container for ease of use.

## Running the app

At the time of writing, there is no back-end, so all the instructions below are about running the front-end part.

To install all the required packages, run:

```shell
pnpm install
```

To **build** the app, run:

```shell
pnpm build
```
