FROM node:10.17.0-stretch

COPY . /my_test_code
WORKDIR /my_test_code

VOLUME /my_test_code/reports

ENV RUN_ENV=ci

# install npm packages
RUN npm install --production

# Run Test
CMD ["npm", "run", "test:ci"]
