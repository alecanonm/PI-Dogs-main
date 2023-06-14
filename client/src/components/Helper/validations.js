const regex = /^\d+$/;

export const nameValidation = (dogData, error, setError) => {
  dogData.name.length === 0
    ? setError({ ...error, name: "Set a name to your dog!" })
    : dogData.name.length <= 4
    ? setError({
        ...error,
        name: "name's dog should have at least 5 characters!",
      })
    : dogData.name.length > 30
    ? setError({ ...error, name: "name's dog is too long!" })
    : setError({ ...error, name: "" });
};

export const heightValidation = (dogData, error, setError) => {
  dogData.height === ""
    ? setError({ ...error, height: "Set a height to your dog" })
    : dogData.height < 0 || !regex.test(dogData.height)
    ? setError({
        ...error,
        height: "Set a valid height to your dog!",
      })
    : dogData.height > 100
    ? setError({ ...error, height: "It isn't a valid height!" })
    : setError({ ...error, height: "" });
};

export const weightValidation = (dogData, error, setError) => {
  dogData.weight === ""
    ? setError({ ...error, weight: "Set a weight to your dog" })
    : dogData.weight < 0 || !regex.test(dogData.weight)
    ? setError({
        ...error,
        weight: "Set a valid weight to your dog!",
      })
    : dogData.weight > 80
    ? setError({ ...error, weight: "It isn't a valid weight!" })
    : setError({ ...error, weight: "" });
};

export const ageValidation = (dogData, error, setError) => {
  dogData.age === ""
    ? setError({ ...error, age: "Set a age to your dog" })
    : dogData.age < 0 || !regex.test(dogData.age)
    ? setError({
        ...error,
        age: "Set a valid age to your dog!",
      })
    : dogData.age > 50
    ? setError({ ...error, age: "It isn't a valid age!" })
    : setError({ ...error, age: "" });
};
