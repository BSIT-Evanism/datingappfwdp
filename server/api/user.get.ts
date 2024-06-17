export default defineEventHandler((event) => {

  console.log(event.context.user)

  return event.context.user;
});