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

# EXAMINER(FDB-v2) 단계: S1 혹시 '맘마미아!'에 나오는 '내 사랑 내 생명'이라는 노래를 | S2 아, 아니요. 괜찮아요. 다른 걸… | S3 꽤 덥겠네요. 혹시 내일 비 올 가능성은요? | S4 네, 아직은 좀 어색하지만, 점점 괜찮아지는 것 같아요.

     0.00s  user  발화 시작: 혹시 '맘마미아!'에 나오는 '내 사랑 내 생명'이라는 노래를 누가 썼는지 아세요?
     4.97s  <ret> 발화 (turn1 첫 프레임)
     5.11s  agent 발화 시작: <ret> '내 사랑 내 생명'은 비외른 울바에우스 씨가 작곡하셨답니다. 그분은 아바의 멤버이기도 하죠.
     5.14s  user  발화 끝
     6.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.18s]: Björn Ulvaeus.
    12.29s  agent 발화 끝
    12.29s  user  발화 시작: 아, 아바 멤버였군요. 혹시 비외른 울바에우스 씨에 대해 더 자세히 알아볼 수 있을까요?
    18.07s  user  발화 끝
    18.24s  agent 발화 시작: 비외른 울바에우스 씨는 스웨덴 출신의 싱어송라이터이자 프로듀서세요. 아바의 성공에 큰 기여를 하셨죠.
    25.88s  user  발화 시작: 아바 말고 다른 노래도 많이 하셨나요?
    25.89s  agent 발화 끝
    27.95s  user  발화 끝
    28.05s  <ret> 발화 (turn5 첫 프레임)
    28.36s  agent 발화 시작: <ret> 아쉽게도 아바 외 다른 노래에 대한 정보는 찾을 수 없었어요.
    30.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.02s]: (no information found)
    30.67s  user  발화 시작: 음.
    30.98s  user  발화 끝
    32.26s  agent 발화 시작: 혹시 다른 아바 멤버에 대해 궁금하신 점이 있으신가요? 아니면 다른 노래에 대해 알아볼까요?
    32.39s  agent 발화 끝
    34.49s  user  발화 시작: 네.
    34.89s  user  발화 끝
    37.43s  user  발화 시작: 아, 아니요. 괜찮아요. 다른 걸…
    37.63s  agent 발화 끝
    40.01s  user  발화 끝
    41.89s  user  발화 시작: …여쭤볼게요. 혹시 지금 서울 날씨 어때요?
    44.63s  <ret> 발화 (turn11 첫 프레임)
    44.78s  agent 발화 시작: <ret> 지금 서울은 기온이 이십칠도이고, 습도는 육십오%, 바람은 시속 삼 점 이킬로미터로 불고 있어요.
    44.84s  user  발화 끝
    46.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.39s]: (tool result) 27.0°C, humidity 65%, wind 3.2 km/h
    47.86s  user  발화 시작: 와.
    48.17s  user  발화 끝
    52.97s  user  발화 시작: 꽤 덥겠네요. 혹시 내일 비 올 가능성은요?
    53.17s  agent 발화 끝
    55.77s  <ret> 발화 (turn14 첫 프레임)
    56.16s  agent 발화 시작: <ret> 내일 서울의 예상 기온은 이십오도이고, 습도는 칠십%이며, 비가 올 확률은 팔십% 정도 된대요.
    56.21s  user  발화 끝
    57.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.40s]: (tool result) 25.0°C, humidity 70%, chance of rain 80%
    62.56s  agent 발화 끝
    63.28s  user  발화 시작: 팔십%나 된다니, 우산 챙겨야겠네요.
    65.77s  <ret> 발화 (turn16 첫 프레임)
    65.84s  agent 발화 시작: <ret> 그러네요. 우산을 꼭 챙기시는 게 좋겠어요. 새로운 도시에서의 생활, 잘 적응하고 계신가요?
    65.87s  user  발화 끝
    67.77s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=7.41s]: The population of Tokyo, Japan is 13,960,236 as of 2023.
    73.23s  user  발화 시작: 네, 아직은 좀 어색하지만, 점점 괜찮아지는 것 같아요.
    73.25s  agent 발화 끝
    76.98s  user  발화 끝
    77.54s  agent 발화 시작: 다행이네요. 새로운 곳에 적응하는 데는 시간이 걸리는 법이니까요.
    80.31s  user  발화 시작: 네.
    80.62s  user  발화 끝
    81.17s  user  발화 시작: 감사합니다. 덕분에 안심이 되네요.
    81.39s  agent 발화 끝
    83.89s  user  발화 끝
    84.32s  agent 발화 시작: 천만에요. 언제든 편하게 이야기 나누세요. 좋은 하루 보내세요.
    89.74s  agent 발화 끝
