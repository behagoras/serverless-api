# Description
This is a proxy for listening the torre's endpoints to be used into a React app

Deploy this using vercel

# Endpoints:

## GET: `/bio/:username`:

This endpoints fetch data from users

### params:

- `username`:The torre username, for example: `davidbehar`

### Example using fetch

```js
fetch(baseUrl+'/bio/davidbehar')
	.then(results=>results.json())
	.then(data=>console.log(data))
```

## GET `/opportunities/:id`

This endpoint get a specific opportunity:

### params:

- `id`: the opportunity id

### Example using fetch

```js
fetch(baseUrl+'/opportunities/8wD6yArl')
	.then(results=>results.json())
	.then(data=>console.log(data))
```

## POST `/search/opportunities`

This endpoint get an opportunity search :

### body:

Every element send as the body will be send back to the original torre request, some keys are:

- `currency`: 
- `page`: 
- `periodicity`: 
- `lang`
- `size`
- `aggregate`
- `offset`

### Example using fetch

```js
fetch(baseUrl+'/search/opportunities`', {
  body: { currency: 'MXN', page: 0, periodicity: 'hourly', lang: 'en', size: 20, aggregate: false, offset: 10 }
})
	.then(results=>results.json())
	.then(data=>console.log(data))
```

## POST `/search/people

This endpoint get an people search :

### body:

Every element send as the body will be send back to the original torre request, some keys are:

- `currency`: 
- `page`: 
- `periodicity`: 
- `lang`
- `size`
- `aggregate`
- `offset`

### Example using fetch

```js
fetch(baseUrl+'/search/people`', {
  body: { currency: 'MXN', page: 0, periodicity: 'hourly', lang: 'en', size: 20, aggregate: false, offset: 10 }
})
	.then(results=>results.json())
	.then(data=>console.log(data))
```
