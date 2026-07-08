# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 알람 목록 알려 줘, 안 쓰는 것도 다 보여 줘.
     3.08s  agent 발화 시작: <ret> 네, 지금 알람 설정을 확인해 봤는데요. 아침 7시, 밤 10시, 그리고 비활성화된 오후 2시 알
     3.08s  <ret> 발화 (turn1 첫 프레임)
     3.24s  user  발화 끝
     4.60s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.18s]: (tool result) There are three alarms set: seven AM, repeat Monday thro
    10.63s  agent 발화 끝
    11.28s  user  발화 시작: 어, 그, 오후 2시 알람은 취소해 줄래? 그, 이제 필요 없어.
    15.11s  agent 발화 시작: <ret> 네, 그렇게 해 드릴게요.
    15.11s  <ret> 발화 (turn3 첫 프레임)
    15.31s  user  발화 끝
    16.15s  ⚡SPAN 주입 [d'=1.04s / d_lead=1.43s]: (tool result) The two PM alarm has been deleted.
    16.51s  agent 발화 시작: 오후 2시 알람은 이제 완전히 취소됐습니다.
    16.54s  agent 발화 끝
    19.55s  agent 발화 끝
    20.47s  user  발화 시작: 좋아, 고마워. 지금 누크, 그린란드 시간 몇 시야?
    23.69s  agent 발화 시작: <ret> 좋은 질문인데요, 누크 그린란드 현재 시간을 알아볼게요. 지금 누크 그린란드 시간은 저녁 7시 4
    23.69s  <ret> 발화 (turn6 첫 프레임)
    23.98s  user  발화 끝
    27.05s  ⚡SPAN 주입 [d'=3.36s / d_lead=6.10s]: (tool result) The time in Nuuk, Greenland is currently 7:48 PM.
    35.88s  agent 발화 끝
