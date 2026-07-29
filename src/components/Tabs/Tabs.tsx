import {
  forwardRef,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import classNames from "../../helpers/classNames";
import styles from "./Tabs.module.scss";

interface TabProps {
  content: ReactNode;
  disabled?: boolean;
  id: number;
  title: string;
}

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  activeTabId?: number;
  defaultActiveTabId?: number;
  onActiveTabChange?: (tabId: number) => void;
  tabs: readonly TabProps[];
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      activeTabId,
      className = "",
      defaultActiveTabId,
      onActiveTabChange,
      tabs,
      ...props
    },
    ref,
  ) => {
    const [indicator, setIndicator] = useState<{
      left: number;
      width: number;
    }>();
    const generatedId = useId();
    const firstEnabledTab = tabs.find((tab) => !tab.disabled);
    const [internalActiveTabId, setInternalActiveTabId] = useState(
      defaultActiveTabId ?? firstEnabledTab?.id,
    );
    const buttonRefs = useRef<Map<number, HTMLButtonElement>>(new Map());
    const requestedActiveTabId = activeTabId ?? internalActiveTabId;
    const activeTab =
      tabs.find((tab) => tab.id === requestedActiveTabId && !tab.disabled) ??
      firstEnabledTab;

    const selectTab = (tab: TabProps) => {
      if (tab.disabled || tab.id === activeTab?.id) return;

      if (activeTabId === undefined) {
        setInternalActiveTabId(tab.id);
      }
      onActiveTabChange?.(tab.id);
    };

    useLayoutEffect(() => {
      if (!activeTab) return;

      const activeButton = buttonRefs.current.get(activeTab.id);

      if (!activeButton) return;

      setIndicator({
        width: activeButton.offsetWidth,
        left: activeButton.offsetLeft,
      });
    }, [activeTab?.id, activeTab]);

    return (
      <div {...props} ref={ref} className={classNames(styles.tabs, className)}>
        <div className={styles.titles} role="tablist">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab?.id;
            const tabId = `${generatedId}-tab-${tab.id}`;
            const panelId = `${generatedId}-panel-${tab.id}`;

            return (
              <button
                key={tab.id}
                aria-controls={panelId}
                aria-selected={isActive}
                className={classNames(styles.title, isActive && styles.active)}
                disabled={tab.disabled}
                id={tabId}
                onClick={() => selectTab(tab)}
                role="tab"
                tabIndex={isActive ? 0 : -1}
                type="button"
                ref={(element) => {
                  if (element) {
                    buttonRefs.current.set(tab.id, element);
                  } else {
                    buttonRefs.current.delete(tab.id);
                  }
                }}
              >
                {tab.title}
              </button>
            );
          })}

          <div
            style={{
              width: indicator?.width,
              transform: `translateX(${indicator?.left}px)`,
            }}
            className={styles.indicator}
            aria-hidden="true"
          />
        </div>

        {activeTab && (
          <div
            aria-labelledby={`${generatedId}-tab-${activeTab.id}`}
            className={styles.tabsBody}
            id={`${generatedId}-panel-${activeTab.id}`}
            role="tabpanel"
            tabIndex={0}
          >
            {activeTab.content}
          </div>
        )}
      </div>
    );
  },
);

Tabs.displayName = "Tabs";

export type { TabsProps, TabProps };
export default Tabs;
