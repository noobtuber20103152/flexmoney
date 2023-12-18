
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

#### Get all items

```http
  https://tacky-tank-production.up.railway.app/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/enroll
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



# Frontend
Tech stack used : Next.js, Tailwind CSS

## Appendix

Any additional information goes here

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## 🚀 About Me
I'm a full stack developer...


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
    
## Screenshots

![App Screenshot](https://github.com/Binita-tech/Binita-tech/assets/78761614/84aaecf8-a16c-48e2-9aca-5af3634ebb2c)

![App Screenshot](https://github.com/Binita-tech/Binita-tech/assets/78761614/e59e095f-2e02-4705-9378-7d9f89b7b632)



## Run Locally

Clone the project

```bash
  git clone https://github.com/noobtuber20103152/groww
```

Go to the project directory

```bash
  cd groww
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Demo

Insert gif or link to demo

