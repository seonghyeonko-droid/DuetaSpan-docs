# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 알람 목록 알려 줘, 안 쓰는 것도 다 보여 줘.
     2.92s  <ret> 발화 (turn1 첫 프레임)
     3.08s  agent 발화 시작: <ret> 네, 지금 알람 설정을 확인해 봤는데요. 아침 7시, 밤 10시, 그리고 비활성화된 오후 2시 알
     3.24s  user  발화 끝
     4.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.18s]: (tool result) There are three alarms set: seven AM, repeat Monday thro
    10.63s  agent 발화 끝
    11.28s  user  발화 시작: 어, 그, 오후 2시 알람은 취소해 줄래? 그, 이제 필요 없어.
    14.79s  <ret> 발화 (turn3 첫 프레임)
    15.11s  agent 발화 시작: <ret> 네, 그렇게 해 드릴게요.
    15.31s  user  발화 끝
    15.91s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.43s]: (tool result) The two PM alarm has been deleted.
    16.54s  agent 발화 끝
    16.59s  agent 발화 시작: 오후 2시 알람은 이제 완전히 취소됐습니다.
    19.63s  agent 발화 끝
    19.68s  user  발화 시작: 좋아, 고마워. 지금 누크, 그린란드 시간 몇 시야?
    22.77s  <ret> 발화 (turn6 첫 프레임)
    23.09s  agent 발화 시작: <ret> 좋은 질문인데요, 누크 그린란드 현재 시간을 알아볼게요. 지금 누크 그린란드 시간은 저녁 7시 4
    23.19s  user  발화 끝
    23.41s  ⚡SPAN 주입 [d'=0.64s / d_lead=6.10s]: (tool result) The time in Nuuk, Greenland is currently 7:48 PM.
    35.28s  agent 발화 끝
