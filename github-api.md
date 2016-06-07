##How does the API handle authentication?
  ###Do I need to authenticate?
    ####No.  You do not need to authenticate but this should only be done when you are on the server.
        You should always authenticate when you are client-side.
  ###What can I do with an unauthenticated request?
  ###How can I authenticate my request? (3 ways)
    ####Basic authentication
      #####Basic authentication is basically just using the username and password but this is
           not all that secure.
    ####OAuth2 Tokens
    ####OAuth2 Keys
##How do I ask the API for...
  ###The profile information for a specific user?
     ####get users/:profile?
  ###The repository listing for a specific user?
     ####GET /user/repos
  ###The recent, public activity for a specific user?
     ####GET /notifications/since
##Is there a limit to the number of requests I can make?
  Yes, there is a limit to the number of requests that you can make.  With Basic Authentication and
  OAuth, there is a limit of 5,000 requests each hour.  The limit is a mere 60 requests per hour for
  unauthenticated requests.
  ###Is there a way of extending that limit?  
    ####Why yes, you can extend that limit.  With OAuth requests, your application's client ID and passphrase
        will need to be passed as part of the query string.
  ###What happens when I hit the limit?
    ####When you hit the limit, you will be thrown an error.  There are ways to ensure that you do not hit
        your limit, though.
##What if there is a lot of data returned?
  ###How can I ask for more (or less) data from a request?
    ####To ask for less data, you can easily alter your search to look for repositories based on date
        created, stars, size, or even a specific user.
  ###How do I know that there is more data available?
     ####There is information in the response header to let you know
##What are the endpoints for fetching...
  ###the profile data for a user?
     ####GET /users/(username)
  ###the organizations a user belongs to?
    #GET /user/orgs
  ###the repositories a user has created?
     ####GET /users/:username/repos
  ###a filtered list of repositories?
  ###a sorted list of repositories?
     ####I don't understand the question but there is a sort keyword and you can search by
         forks, stars, etc...
  ###public events for a user?
     ####GET /users/:username/events
##When fetching public events for a user...
  ###How many results are returned by default?
     ####Up to 300 events are returned by default and events over 90 days are not returned.
  ###What limitations exist on fetching more results?
  ###What is the basic structure of the results?
     ####The type of event, whether it is public or not, and the payload.
         After that, it returns repo, actor, and organization data.  Finally, it returns the
         date it was created and its id.
  ###What fields are included in each result?
     ####The type of event: string, whether it is public or not: boolean, and the payload.
         After that, the repo: id(number), name(string), and url(string). For the actor and org:
         "id": number, "login": string, "gravatar_id": string, "avatar_url": string,
         "url": string.  Finally, the date and id are strings.
  ###What are the data types for each field?
      ####The type of event: string, whether it is public or not: boolean, and the payload.
          After that, the repo: id(number), name(string), and url(string). For the actor and org:
         "id": number, "login": string, "gravatar_id": string, "avatar_url": string,
         "url": string.  Finally, the date and id are strings.
  ###What are some of the different values for the type field?
      ####"url": "https://api.github.com/users/octocat", "id": "12345"
