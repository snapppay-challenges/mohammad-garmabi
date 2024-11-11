import MuiButton from './components/button';
import MuiLink from './components/link';

export function componentsOverrides() {
  return {
    MuiButton: MuiButton(),
    MuiLink: MuiLink(),
  };
}
