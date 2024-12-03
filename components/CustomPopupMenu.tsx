import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Pressable,
  LayoutChangeEvent,
} from 'react-native';

type CustomPopupMenuProps = {
  triggerChild: React.ReactNode;
};

type TSize = {
  width: number;
  height: number;
};

const CustomPopupMenu = ({ triggerChild }: CustomPopupMenuProps) => {
  const [visible, setVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [contentSize, setContentSize] = useState<TSize | null>(null);
  const triggerRef = useRef<View>(null);

  const toggleMenu = () => {
    if (!visible) {
      // Measure the position of the button
      triggerRef.current?.measure((height, px, py) => {
        setMenuPosition({ top: py + height, left: px - (contentSize?.width ?? 0) });
        setVisible(true);
      });
    } else {
      setVisible(false);
    }
  };

  const handleContentLayout = async (event: LayoutChangeEvent) => {
    if (event.nativeEvent.layout.height === 0) return;

    if (contentSize === null) {
      const _layout = event.nativeEvent.layout;

      console.log('layout', _layout);

      setContentSize({
        width: _layout.width,
        height: _layout.height,
      });
    }
  };

  return (
    <>
      {/* Button to open popup menu */}
      <TouchableOpacity ref={triggerRef} onPress={toggleMenu}>
        {triggerChild}
      </TouchableOpacity>

      {/* Popup Menu */}
      {visible && (
        <Modal
          transparent={true}
          visible={visible}
          animationType='fade'
          onRequestClose={() => setVisible(false)} // Close menu when back button is pressed on Android
        >
          <Pressable
            style={styles.overlay}
            onPress={() => setVisible(false)} // Close menu on tapping outside
          >
            <View
              style={[
                styles.popupMenu,
                { position: 'absolute', top: menuPosition.top, left: menuPosition.left },
              ]}
              onLayout={handleContentLayout}
            >
              <TouchableOpacity
                onPress={() => console.log('option 1 clicked')}
                style={styles.menuItem}
              >
                <Text style={styles.menuItemText}>Option 1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log('option 2 clicked')}
                style={styles.menuItem}
              >
                <Text style={styles.menuItemText}>Option 2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log('option 3 clicked')}
                style={styles.menuItem}
              >
                <Text style={styles.menuItemText}>Option 3</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  menuButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  popupMenu: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 200,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default CustomPopupMenu;
