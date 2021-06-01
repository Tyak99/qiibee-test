This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# LoyaltyPro

An app that allows brands award loyalty points to customers following them, similar to qiibee

## How to setup

#### With Docker
```
Clone the repository
$ git clone https://github.com/Tyak99/qiibee-test.git

Enter the folder
$ cd qiibee-test

Run docker-compose
$ docker-compose up

```
#### Without Docker
```
Clone the repository
$ git clone https://github.com/Tyak99/qiibee-test.git

Enter the folder
$ cd qiibee-test

Install packages
$ yarn

Start in development mode
$ yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
## Tools used

* [Redux-toolkit](https://redux-toolkit.js.org/) - An out of the box setup for easily using redux
* [Redux-Observable](https://redux-observable.js.org/) - For async redux operations
* [ChakraUi](https://chakra-ui.com/) - For UI components
* [Redux-hook-form](https://react-hook-form.com/) - For better form handling
* [Redux-persist](https://github.com/rt2zz/redux-persist) - To persist the redux state for easy testing
## How to test

**Important: Redux-persist is used to persist the state of the application, so all data lives through browser refresh for easy testing. To reset the persisted redux state, uncomment `storage.removeItem('persist:root')` in src/strore/index.js and save. Comment it back to resume persisting redux state**

> Note: There are two types of users - Brand, Customer.
### Authentication
 1. Visit `/register` and register as a brand
 2. Visit `/register` and register as a customer
 3. Visit `/login` and login with the credentials of a registered brand
 4. Visit `/login` and login with the credentials of a registered customer
 > Note: You need to click the logout button before you can login as a new type of user
### Customer Page
1. Log In as a customer to see list of different brands along with the current balance for each brand, you can click on a brand to follow
2. Click on a followed brand to see how many loyalty points you have, you can redeem a certain 
amount by clicking on the redeem button

### Brand Dashboard
1. Log In as a brand to see a list of brand followers
2. Select single or multiple followers to award point to, use the award point input form that appears after selecitng one or multiple followers


### Design Inspiration

[Quiibee Dashboad](https://dashboard.qiibee.com)