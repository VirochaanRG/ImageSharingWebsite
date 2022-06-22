export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    console.log(query);
    return query
}