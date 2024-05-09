// Функция initTabs инициализирует вкладки на странице. Она выбирает все элементы с классом [data-tabs-container] и применяет к ним необходимые атрибуты доступа для соответствия стандартам WAI-ARIA. Затем она добавляет обработчики событий для кликов и нажатий клавиш, чтобы управлять активностью вкладок.

// Функция switchTab изменяет состояние вкладок, делая выбранной ту, которая была кликнута, и скрывая остальные панели. Функции moveLeft и moveRight используются для перемещения между вкладками при нажатии клавиш со стрелками влево и вправо соответственно.

// Комментарии к коду могут включать информацию о том, какие атрибуты добавляются к элементам, как обрабатываются события клика и натия клавиш, а также описание логики работы функций switchTab, moveLeft и moveRight.

function initTabs() {
  const tabsContainers = document.querySelectorAll('[data-tabs-container]');

  tabsContainers.forEach((tabContainer) => {
    const tabsList = tabContainer.querySelector('[data-tabs-list]');
    const tabButtons = tabsList.querySelectorAll('[data-tabs-link]');
    const tabPanels = tabContainer.querySelectorAll(
      '[data-tabs-content] > div',
    );

    tabsList.setAttribute('role', 'tablist');

    tabsList.querySelectorAll('li').forEach((listitem) => {
      listitem.setAttribute('role', 'presentation');
    });

    tabButtons.forEach((tab, index) => {
      tab.setAttribute('role', 'tab');
      if (index === 0) {
        tab.setAttribute('aria-selected', 'true');
      } else {
        tab.setAttribute('tabindex', '-1');
        tabPanels[index] ? tabPanels[index].setAttribute('hidden', '') : '';
      }
    });

    tabPanels.forEach((panel) => {
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('tabindex', '0');
    });

    tabContainer.addEventListener('click', (e) => {
      const clickedTab = e.target.closest('a');
      if (!clickedTab) return;
      e.preventDefault();

      switchTab(clickedTab);
    });

    tabContainer.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          moveLeft();
          break;
        case 'ArrowRight':
          moveRight();
          break;
        case 'Home':
          e.preventDefault();
          switchTab(tabButtons[0]);
          break;
        case 'End':
          e.preventDefault();
          switchTab(tabButtons[tabButtons.length - 1]);
          break;
      }
    });

    function moveLeft() {
      const currentTab = document.activeElement;
      if (!currentTab.parentElement.previousElementSibling) {
        switchTab(tabButtons[tabButtons.length - 1]);
      } else {
        switchTab(
          currentTab.parentElement.previousElementSibling.querySelector('a'),
        );
      }
    }

    function moveRight() {
      const currentTab = document.activeElement;
      if (!currentTab.parentElement.nextElementSibling) {
        switchTab(tabButtons[0]);
      } else {
        switchTab(
          currentTab.parentElement.nextElementSibling.querySelector('a'),
        );
      }
    }

    function switchTab(newTab) {
      const activePanelId = newTab.getAttribute('href');
      const activePanel = tabContainer.querySelector(activePanelId);

      tabButtons.forEach((button) => {
        button.setAttribute('aria-selected', false);
        button.setAttribute('tabindex', '-1');
      });

      tabPanels.forEach((panel) => {
        panel.setAttribute('hidden', true);
      });

      activePanel.removeAttribute('hidden', false);

      newTab.setAttribute('aria-selected', true);
      newTab.setAttribute('tabindex', '0');
      newTab.focus();
    }
  });
}

export default initTabs;
