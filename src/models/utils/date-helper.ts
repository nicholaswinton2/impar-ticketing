/**
 * Created by francesco on 28/11/2016.
 */

export class DateHelper {

  /**
   * Check if a date marker is compliant with a date value:
   *  - if the marker is set to false, the date must not be defined
   *  - if the marker is set to true, the date must be a valid date
   * @param {string} objDate - date value
   * @param {number} jsonMarker - the marker
   * @returns {string} - descriptive warning message to show to the user
   */
  static compareDateWithMarker(objDate: string, jsonMarker: number): string {
    if(jsonMarker === 0 && objDate != null) {
      return `activated field expected to be null, ` +
        `instead of: ${objDate}`;
    }
    if(jsonMarker === 1 && !!( new Date(objDate).getTime() ) === false) {
      return `activated field expected to be a valid date, ` +
        `instead of: ${objDate}`;
    }
    return;
  }

}
