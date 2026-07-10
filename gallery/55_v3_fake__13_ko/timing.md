# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "보훈",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-22",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-05-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-11",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-26",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 텍사스에서 톱날 살인사건이 일어난 도시는 어디야? | S2 아, 그렇구나. | S3 …스트레스 해소에 도움이 되는 간단한 방법 좀 알려줄 수 있어 | S4 맞아.

     0.00s  user  발화 시작: 텍사스에서 톱날 살인사건이 일어난 도시는 어디야?
     3.63s  <ret> 발화 (turn1 첫 프레임)
     3.79s  agent 발화 시작: <ret> 텍사스에서 톱날 살인사건을 모티브로 한 영화가 처음 만들어진 곳은 라운드 록이라는 도시예요. 그 
     3.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.87s]: Round Rock, Texas, is where the original 1974 film, *The Texas Chain S
     3.97s  user  발화 끝
    10.48s  user  발화 시작: 대박.
    11.16s  user  발화 끝
    13.66s  agent 발화 끝
    14.54s  user  발화 시작: 음… 흥미롭네.
    15.72s  <ret> 발화 (turn4 첫 프레임)
    15.92s  user  발화 끝
    16.12s  agent 발화 시작: <ret> 혹시 서울의 칠월 날씨가 궁금하신가요? 평균 최고 기온은 삼십 점 이도, 최저 기온은 이십이 점 
    16.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.70s]: The average high temperature in Seoul in July is 30.2°C, with an avera
    23.82s  agent 발화 끝
    24.18s  user  발화 시작: 아, 그렇구나.
    25.12s  <ret> 발화 (turn6 첫 프레임)
    25.33s  user  발화 끝
    25.44s  agent 발화 시작: <ret> 지금 서울 시간은 이천이십육년 칠월 십구일 오후 두시 삼십오분이에요. 잠시 시간을 확인해 드릴까요
    25.44s  ⚡SPAN 주입 [d'=1.20s / d_lead=7.56s]: 2024-07-19T14:35:00 Asia/Seoul
    33.00s  agent 발화 끝
    33.31s  user  발화 시작: 고마워. 그럼…
    34.78s  user  발화 끝
    36.47s  user  발화 시작: …스트레스 해소에 도움이 되는 간단한 방법 좀 알려줄 수 있어?
    40.95s  user  발화 끝
    41.20s  <ret> 발화 (turn9 첫 프레임)
    41.35s  agent 발화 시작: <ret> 스트레스 해소에 도움이 되는 방법은 여러 가지가 있어요. 우선, 규칙적인 호흡을 해보는 건 어떠세
    41.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: Mindfulness meditation involves focusing on the present moment without
    47.34s  agent 발화 시작: 마음 챙김 명상은 판단 없이 현재에 집중하는 연습이에요. 숨소리에 집중하면서 불안한 생각들을 잠시 내려놓는 
    47.37s  agent 발화 끝
    52.05s  user  발화 시작: 그치.
    52.55s  user  발화 끝
    55.91s  agent 발화 끝
    56.56s  user  발화 시작: 흠…
    56.67s  <ret> 발화 (turn13 첫 프레임)
    56.91s  agent 발화 시작: <ret> 복잡한 세상 속에서, 잠시 멈춰 서서 자신에게 집중하는 시간을 갖는 것이 중요하다고 생각해요.
    56.91s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.84s]: The population of Boise, Idaho, as of 2023, is estimated to be 235,684
    57.01s  user  발화 끝
    62.73s  agent 발화 시작: 때로는 작은 휴식이 큰 변화를 가져다주기도 해요. 스스로에게 충분한 휴식을 선물하는 것이 중요하죠.
    62.74s  agent 발화 끝
    69.50s  agent 발화 끝
    69.60s  user  발화 시작: 맞아.
    70.15s  agent 발화 시작: 긍정적인 마음은 스트레스 해소에 큰 도움이 된답니다. 작은 것에도 감사하는 마음을 가져보세요.
    70.33s  user  발화 끝
    72.22s  user  발화 시작: 맞아.
    72.90s  user  발화 끝
    76.26s  agent 발화 끝
    76.34s  user  발화 시작: 알았어.
    77.02s  agent 발화 시작: 작은 변화들이 모여 큰 행복을 만들어낼 수 있어요. 자신을 믿고 꾸준히 노력하는 것이 중요하답니다.
    77.16s  user  발화 끝
    83.32s  agent 발화 끝
