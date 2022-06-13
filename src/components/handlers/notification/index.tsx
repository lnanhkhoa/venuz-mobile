import { NotificationLib, PushNotificationLib } from 'services';
import { isEmpty, isNil } from 'lodash';
import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
// import { useSelector } from 'react-redux';
// import { selectAppPermissions, selectCheckUserSuccess, selectNavReady } from 'store/Root/selector';

function NotificationHandler() {
  // const isNavReady = useSelector(selectNavReady);
  // const isAppPermissions = useSelector(selectAppPermissions);
  // const checkUserSuccess = useSelector(selectCheckUserSuccess);

  const onMessageReceived = useRef<MessageHandle>(emptyFunction);
  const onLocalNotification = useRef<MessageHandle>(emptyFunction);
  const onMessageReceivedInForeground = useRef<MessageHandle>(emptyFunction);
  const onMessageOpened = useRef<MessageHandle>(emptyFunction);

  useEffect(() => {
    onMessageReceived.current = async message => {
      if (isEmpty(message)) {
        return;
      }
    };
  }, []);

  useEffect(() => {
    onLocalNotification.current = async message => {
      if (isEmpty(message?.notification) || isNil(message?.notification)) {
        return;
      }
      const { title, body } = message.notification;
      const { messageId, data } = message;
      PushNotificationLib.localNotification({
        id: messageId,
        title: title || '',
        message: body || '',
        data: data || {},
      });
    };
  }, []);

  useEffect(() => {
    onMessageReceivedInForeground.current = async message => {
      if (!isEmpty(message)) {
        onMessageReceived.current(message);
        onLocalNotification.current(message);
      }
    };
  }, []);

  useEffect(() => {
    onMessageOpened.current = async message => {
      if (!isEmpty(message)) {
        const { data = {} } = message;
        switch (data.notification_type) {
          case '':
            break;
          default:
            break;
        }
      }
    };
  }, []);

  useEffect(
    () => {
      // if (isNavReady && isAppPermissions) {
      NotificationLib.initialize().then(() => {
        // NotificationLib.subscribeFromTopic('notificationTopic');
      });
      // }
    },
    [
      // isNavReady, isAppPermissions
    ],
  );

  useEffect(
    () => {
      // if (isNavReady && checkUserSuccess) {
      // const onMessage = NotificationLib.onMessage(async (message: any) =>
      //   onMessageReceivedInForeground.current(message),
      // );
      // NotificationLib.setBackgroundMessageHandler(async (message: any) =>
      //   onMessageReceived.current(message),
      // );
      // const onNotification = PushNotificationLib.onNotification((notification: any) =>
      //   onMessageOpened.current({
      //     data: notification.data,
      //   }),
      // );
      // PushNotificationLib.popInitialNotification(async (message: any) => {
      //   onMessageOpened.current(message);
      // });
      // return () => {
      //   onMessage();
      //   onNotification();
      // };
      // }
    },
    [
      // isNavReady, checkUserSuccess
    ],
  );

  return <View />;
}

export default NotificationHandler;

type MessageHandle = (message: any) => Promise<void>;
const emptyFunction = async () => {};
