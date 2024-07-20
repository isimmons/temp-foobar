import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

// type PokemonErrorBoundayProps = {

// }

export default function PokemonErrorBoundary(props) {
  return <ErrorBoundary FallbackComponent={ErrorFallback} {...props} />;
}
