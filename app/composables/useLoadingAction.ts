type PromiseAction<T> = Promise<T> | (() => Promise<T>);

export async function useLoadingAction<T>(action: PromiseAction<T>, message?: string): Promise<T> {
  try {
    useModal().loading(message ?? true);
    return typeof action === 'function' ? await action() : await action;
  } catch (error) {
    throw error;
  } finally {
    useModal().loading(false);
  }
}