# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "다민",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-05-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 '맘마미아!'에 나오는 'My Love My Life'  | S2 혹시 아바가 결성된 해를 알 수 있을까요? | S3 아바 멤버 중에 여성 분들은 누구였죠? | S4 'Dancing Queen' 정말 좋아하는데, 그 노래는 언제

     0.00s  user  발화 시작: 혹시 '맘마미아!'에 나오는 'My Love My Life' 노래를 누가 썼는지 아세요?
     4.83s  <ret> 발화 (turn1 첫 프레임)
     4.98s  agent 발화 시작: <ret> 네, 그 노래는 비외른 울바에우스가 작사, 작곡했습니다.
     5.00s  user  발화 끝
     6.59s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.30s]: Björn Ulvaeus is a Swedish singer, songwriter, musician, producer, and
     9.23s  agent 발화 시작: 비외른 울바에우스는 스웨덴의 가수이자 작곡가, 음악가, 프로듀서이며 스웨덴 음악 그룹 아바의 멤버입니다.
     9.28s  agent 발화 끝
    17.66s  agent 발화 끝
    19.14s  user  발화 시작: 아, 아바 멤버였군요! 그럼 아바 다른 노래들도 많이 작곡했겠네요?
    23.74s  agent 발화 시작: 비외른 울바에우스는 아바의 수많은 히트곡에 참여했답니다.
    23.77s  user  발화 끝
    25.50s  user  발화 시작: 네.
    25.90s  user  발화 끝
    28.09s  agent 발화 끝
    29.95s  user  발화 시작: 혹시 아바가 결성된 해를 알 수 있을까요?
    32.17s  <ret> 발화 (turn7 첫 프레임)
    32.48s  agent 발화 시작: <ret> 아바는 천구백칠십이년에 스웨덴 스톡홀름에서 결성되었습니다.
    32.49s  user  발화 끝
    34.07s  user  발화 시작: 네.
    34.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.72s]: ABBA was formed in Stockholm, Sweden in 1972.
    34.38s  user  발화 끝
    37.20s  agent 발화 끝
    37.28s  user  발화 시작: 아, 스톡홀름이군요. 혹시 스톡홀름 날씨는 지금 어때요?
    41.35s  <ret> 발화 (turn10 첫 프레임)
    41.50s  agent 발화 시작: <ret> 현재 스톡홀름의 기온은 섭씨 십팔 점 오도이고, 습도는 육십이%, 바람은 시속 삼 점 일킬로미터입
    41.63s  user  발화 끝
    43.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.23s]: 18.5°C, humidity 62%, wind 3.1 km/h.
    46.78s  user  발화 시작: 음.
    47.09s  user  발화 끝
    50.58s  agent 발화 시작: 스톡홀름은 지금 꽤나 쾌적한 날씨인 것 같아요.
    50.73s  agent 발화 끝
    52.91s  user  발화 시작: 음.
    53.26s  user  발화 끝
    53.86s  agent 발화 끝
    54.68s  user  발화 시작: 아바 멤버 중에 여성 분들은 누구였죠?
    57.03s  agent 발화 시작: 아냐와 프리다 두 분이 아바의 여성 멤버였습니다.
    57.08s  user  발화 끝
    59.71s  user  발화 시작: 네.
    60.06s  user  발화 끝
    60.78s  agent 발화 끝
    62.86s  user  발화 시작: 아냐는 어떤 노래를 주로 불렀나요?
    65.44s  user  발화 끝
    65.48s  agent 발화 시작: 아냐는 'Dancing Queen'이나 'Waterloo' 같은 곡들을 주로 불렀습니다.
    67.04s  user  발화 시작: 네.
    67.39s  user  발화 끝
    69.23s  user  발화 시작: 'Dancing Queen' 정말 좋아하는데, 그 노래는 언제 발매됐죠?
    69.32s  agent 발화 끝
    73.06s  <ret> 발화 (turn21 첫 프레임)
    73.11s  user  발화 끝
    73.14s  agent 발화 시작: <ret> 'Dancing Queen'은 천구백칠십육년 팔월 십육일에 발매되었습니다.
    75.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.30s]: "Dancing Queen" was released on August 16, 1976.
    77.45s  agent 발화 끝
    77.51s  user  발화 시작: 오, 생각보다 오래됐네요. 좋은 노래는 시간이 지나도 변치 않는 것 같아요.
    82.23s  user  발화 끝
