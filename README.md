# SmartPark
SmartPark is an automatic parking system make for reducing the hassle of Parking, which takes 7 days from the average person (per year)
SmartPark System


Overview-
SmartPark is an automated parking management system that detects and displays real-time parking space availability using ultrasonic sensors and microcontroller-based automation. The system reduces the time drivers spend searching for parking slots and provides accurate occupancy data through a simple and efficient hardware-software integration.


Key Features-

Real-Time Slot Detection: Ultrasonic sensors detect vehicle presence with high accuracy.
Dynamic Dashboard: Displays live parking status (Available / Occupied).
Automated Alerts: Notifies entry and exit of vehicles for slot management.
Scalable Architecture: Can be extended to multiple rows and levels.
Energy Efficient: Operates with minimal power consumption using microcontroller logic.
System Architecture


Hardware Layer:

Ultrasonic sensors detect the distance to nearby objects (vehicles).
The microcontroller (Arduino / Raspberry Pi) processes sensor data.
Software Layer:
The processed data is transmitted to a display module or dashboard interface.

Optional: Integration with a web or mobile app for remote monitoring.


Data Visualization:
Real-time parking occupancy visualized on an LED display or dashboard.


Technology Stack

Microcontroller: Arduino Uno / Raspberry Pi
Sensors: Ultrasonic (HC-SR04)
Programming Language: Python / C++ / java
Display: LCD/LED Panel or Web Dashboard
Communication Protocol: Serial / Wi-Fi (for IoT integration)

How It Works

Each parking slot is equipped with an ultrasonic sensor.
When a car occupies the slot, the sensor detects a reduction in distance.
The microcontroller updates the slot’s status as Occupied or Available.
The updated data is displayed on a centralized interface.
(Optional) The system can communicate this data to a web or mobile dashboard for users to check before entering.


Installation & Setup

Connect ultrasonic sensors to the microcontroller.
Upload the SmartPark firmware or Python script.
Link the display module or configure the dashboard.
Run the system to begin real-time monitoring.

Future Enhancements

Integration of AI-based license plate recognition.
Implementation of a mobile app for slot reservation.
Solar-powered modules for energy efficiency.
Cloud connectivity for data analytics and remote monitoring.

Contributors

Project Lead: K. Yashvardhan and Pratham Yadav

Development Team: SmartPark Research Group
                  (Credit to KeshavDaBoss, a true smart guy)

Institution: Army Public School, Bolarum

License

This project is open-source under the MIT License. You are free to use, modify, and distribute it with proper attribution.
