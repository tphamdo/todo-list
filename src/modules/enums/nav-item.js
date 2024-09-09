/*
 * Enum for nav-items
 * Used to keep track of the currently selected nav item
 * @readonly
 */

const NavItem = Object.freeze({
  ALL: Symbol.for("All"),
  TODAY: Symbol.for("Today"),
  WEEK: Symbol.for("Week"),
  COMPLETED: Symbol.for("Completed"),
  PROJECT: Symbol.for("Project"), // a project
});

export default NavItem;
