export interface BreakpointsProps {
  [key: string]: string;
}

/**
 * A list of named breakpoints.
 *
 * @type {{small: number, medium: number, large: number, xlarge: number, xxlarge: number}}
 */
export const Breakpoints: BreakpointsProps = {
  small: '0',
  medium: '640w',
  large: '1024w',
  xlarge: '1200w',
  xxlarge: '1440w',
};
