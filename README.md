
# Yoga Class Admission Form System.



Yoga Class Admission Form System's goal is to streamline the admission process, making it seamless for both participants and administrators. This admission form is specifically crafted to cater to the unique requirements of our Yoga classes, ensuring a smooth enrollment experience for individuals seeking to embark on a journey towards wellness.

## System Overview
The Yoga Class Admission Form System encompasses the following key features:

Age Limit Restriction: Participants must fall within the age range of 18 to 65 to enroll in the monthly classes.

Flexible Payment Structure: Fees are payable on a month-to-month basis, allowing participants to choose their convenient time within the month for payment. The fixed monthly fee is set at 500/- Rs INR.

Batch Selection: Participants can choose one of the four available batches per day, namely 6-7AM, 7-8AM, 8-9AM, and 5-6PM. While participants have the flexibility to switch batches every month, they are required to remain in the same batch throughout a given month.

# Backend
![image](https://github.com/Binita-tech/Binita-tech/assets/78761614/252dd33a-8c39-4adf-b0e9-52ca9b8d21a5)

### In this diagram:

Participant: Represents individuals who can enroll in courses. It has attributes like name, age, email, contact number, address. Further addresss has attributes like street, state, zipcode.

Enrollment: Represents the act of a participant enrolling in a course. It has attributes like participant, batch, Enrollment date.

Payment: Represents the payment made by a participant for an enrollment. It has attributes like enrollment, Payment Amount, Payment Date.

The relationship between Participant and Enrollment is many-to-many, as one participant can enroll in multiple courses, and one course can have multiple participants. Similarly, the relationship between Enrollment and Payment is one-to-one, as each enrollment corresponds to one payment.





## API Reference

#### Base api URL

```http
  https://tacky-tank-production.up.railway.app/
```


#### API endpoint

```http
  POST /api/enroll
```


# Frontend
Tech stack used : Next.js, Tailwind CSS

# Backend
Tech stack used : Node.js




## Run Locally

Clone the project

```bash
  git clone https://github.com/noobtuber20103152/flexmoney
```

Go to the project directory

```bash
  cd flexmoney
```
start server
```bash
cd ./backend 

npm install

npm run start
```

start frontend 
```bash 
cd ./frontend 

npm run start 

npm run dev

```



## Run using docker 

clone the repository 

```bash
git clone git clone https://github.com/noobtuber20103152/flexmoney

cd ./flexmoney 

docker-compose up -d 

```

## Public URL 

```https
website URL - 
```



## Video

![2023-12-18 22-11-45](https://github.com/noobtuber20103152/flexmoney/assets/81584747/b0e11ec3-e1cf-46d5-a72f-922c1559fd9e)


## 🚀 About Me
I'm a full stack developer...
