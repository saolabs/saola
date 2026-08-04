(() => {
    const root = document.querySelector('.demo-page');
    if (!root || root.dataset.demoReady === 'true') return;
    root.dataset.demoReady = 'true';

    const showPanel = (name) => {
        root.querySelectorAll('[data-demo-tab]').forEach((button) => {
            button.classList.toggle('is-active', button.dataset.demoTab === name);
        });
        root.querySelectorAll('[data-demo-panel]').forEach((panel) => {
            panel.classList.toggle('is-hidden', panel.dataset.demoPanel !== name);
        });
    };

    root.querySelectorAll('[data-demo-tab]').forEach((button) => {
        button.addEventListener('click', () => showPanel(button.dataset.demoTab));
    });

    let count = Number(root.querySelector('[data-demo-count-output]')?.textContent || 3);
    const renderCount = () => {
        const output = root.querySelector('[data-demo-count-output]');
        if (output) output.textContent = String(count);
        const decrease = root.querySelector('[data-demo-count="decrease"]');
        const increase = root.querySelector('[data-demo-count="increase"]');
        if (decrease) decrease.disabled = count === 0;
        if (increase) increase.disabled = count === 10;
    };
    root.querySelector('[data-demo-count="decrease"]')?.addEventListener('click', () => { count = Math.max(0, count - 1); renderCount(); });
    root.querySelector('[data-demo-count="increase"]')?.addEventListener('click', () => { count = Math.min(10, count + 1); renderCount(); });

    const nameInput = root.querySelector('[data-demo-name]');
    nameInput?.addEventListener('input', () => {
        const output = root.querySelector('[data-demo-name-output]');
        if (output) output.textContent = nameInput.value || 'Saola';
    });

    const acceptance = root.querySelector('[data-demo-accept]');
    acceptance?.addEventListener('change', () => {
        const next = root.querySelector('[data-demo-continue]');
        if (next) next.disabled = !acceptance.checked;
    });

    let visibleState = true;
    root.querySelector('[data-demo-visibility]')?.addEventListener('click', () => {
        visibleState = !visibleState;
        root.querySelector('[data-demo-visible="true"]')?.classList.toggle('is-hidden', !visibleState);
        root.querySelector('[data-demo-visible="false"]')?.classList.toggle('is-hidden', visibleState);
    });

    const statusCopy = {
        ready: 'Sẵn sàng biên dịch.',
        building: 'Đang biên dịch fixture.',
        error: 'Trạng thái lỗi mẫu.'
    };
    root.querySelectorAll('[data-demo-status]').forEach((button) => {
        button.addEventListener('click', () => {
            const output = root.querySelector('[data-demo-status-output]');
            if (!output) return;
            output.className = `status-card status-${button.dataset.demoStatus}`;
            output.textContent = statusCopy[button.dataset.demoStatus];
        });
    });

    const runtimeCopy = {
        blade: 'Server output trả HTML hoàn chỉnh.',
        typescript: 'Client output giữ state, event và lifecycle.',
        css: 'Selector được gắn scope theo view.'
    };
    root.querySelector('[data-demo-runtime]')?.addEventListener('change', (event) => {
        const output = root.querySelector('[data-demo-runtime-output]');
        if (output) output.textContent = runtimeCopy[event.target.value];
    });

    showPanel('state');
    renderCount();
})();
