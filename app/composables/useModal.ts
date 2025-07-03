import { LazyModalConfirm, LazyModalLoading } from "#components";

const $overlay = useOverlay();
const confirm_modal = $overlay.create(LazyModalConfirm);
const loading_modal = $overlay.create(LazyModalLoading);


export function useModal() {

  const confirm = async (config: Parameters<typeof confirm_modal.open>[0]): Promise<void> => {
    const state = await confirm_modal.open(config).result;
    if (!state) throw new Error('Canceled');
  }

  const loading = (param: string | boolean) => {
    const isString = typeof param === 'string';
    if (isString && loading_modal.isOpen) {
      loading_modal.patch({ message: param });
      return;
    } else if (isString && !loading_modal.isOpen) {
      loading_modal.open({ message: param });
      return;
    } else {
      loading_modal[param ? 'open' : 'close']();
      return;
    }
  }

  return {
    confirm,
    loading,
  }
}