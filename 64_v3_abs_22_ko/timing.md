# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Hato",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-17",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "home",
#       "text": "User's home address is 922 Birch Road."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-19",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아나키스트들이 가장 싫어하는 정부 형태가 뭐예요? | S2 음, 자치적인 사회라… 그게 실제로 가능한 걸까요? | S3 그럼 아나키스트들은 보통 어떤 일을 하면서 살아가나요? | S4 그렇군요. 아나키즘이 폭력적인 운동이라는 말도 있는데, 사실인

     0.00s  user  발화 시작: 아나키스트들이 가장 싫어하는 정부 형태가 뭐예요?
     2.62s  <ret> 발화 (turn1 첫 프레임)
     2.94s  agent 발화 시작: <ret> 음, 그건 좀 어려운 질문인데요. 제가 알아볼게요.
     2.96s  user  발화 끝
     4.30s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.91s]: (no information found)
     5.82s  agent 발화 시작: 죄송하지만, 아나키스트들이 특히 싫어하는 정부 형태에 대한 정보를 찾을 수 없었어요.
     5.84s  agent 발화 끝
     8.66s  user  발화 시작: 네네.
     9.15s  user  발화 끝
    10.54s  user  발화 시작: 아, 그렇군요. 그럼 아나키즘 자체에 대해 좀 설명해 주실 수 있나요?
    10.73s  agent 발화 끝
    14.33s  <ret> 발화 (turn5 첫 프레임)
    14.40s  agent 발화 시작: <ret> 아나키즘은 정부나 통치 체제를 거부하는 정치 철학이에요.
    14.42s  user  발화 끝
    14.83s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.74s]: [source: Wikipedia] Anarchism is a political philosophy that advocates
    18.15s  agent 발화 끝
    18.15s  agent 발화 시작: 자발적인 기관에 기반한 자치적인 사회를 옹호하는 정치 철학이라고 할 수 있어요.
    23.11s  agent 발화 끝
    23.28s  user  발화 시작: 음, 자치적인 사회라… 그게 실제로 가능한 걸까요?
    28.04s  agent 발화 시작: 물론 쉽지는 않겠지만, 이상적인 목표라고 생각해요. 아나키스트들은—
    28.19s  user  발화 끝
    32.00s  user  발화 시작: 그럼 아나키스트들은 보통 어떤 일을 하면서 살아가나요?
    32.53s  agent 발화 끝
    35.12s  <ret> 발화 (turn10 첫 프레임)
    35.36s  agent 발화 시작: <ret> 아, 네. 아나키스트들은 다양한 직업을 가지고 살아갑니다.
    35.55s  user  발화 끝
    36.88s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.02s]: [source: The Anarchist FAQ] Anarchists are found in all walks of life,
    39.35s  agent 발화 시작: 농부, 교사, 예술가, 노동자 등 다양한 분야에서 활동하고 있어요.
    39.38s  agent 발화 끝
    43.51s  agent 발화 끝
    43.73s  user  발화 시작: 그렇군요. 아나키즘이 폭력적인 운동이라는 말도 있는데, 사실인가요?
    48.86s  user  발화 끝
    49.24s  agent 발화 시작: 모든 아나키스트가 폭력을 선호하는 건 아니에요. 비폭력적인 방법으로 사회 변화를 추구하는 아나키스트들도 많답
    56.19s  agent 발화 끝
