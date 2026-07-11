# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "소훈",
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
#       "date": "2025-12-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-11",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2025-10-02",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-09-30",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-06-10",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-27",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 유로비전 이천십칠에 참가한 나라가 몇 개국이야? | S2 흐음… 이천이십년은 코로나 때문에 안 했잖아. 그럼 이천이십일 | S3 이천이십삼년은 또 몇 개국이었지? | S4 그럼 이번 주 토요일에 서울 날씨는 어때?

     0.00s  user  발화 시작: 유로비전 이천십칠에 참가한 나라가 몇 개국이야?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.04s  agent 발화 시작: <ret> 유로비전 송 콘테스트 이천십칠에는 총 마흔두개국이 참가했어요. 새로운 도전을 응원하는 마음으로, 
     0.04s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: Forty-two countries participated in the Eurovision Song Contest 2017.
     0.04s  user  발화 끝
     0.12s  <ret> 발화 (turn6 첫 프레임)
     0.13s  user  발화 시작: 어.
     0.13s  agent 발화 끝
     0.14s  user  발화 시작: 음… 그럼 이천십팔년에는?
     0.14s  user  발화 끝
     0.16s  agent 발화 시작: <ret> 이천십팔년 유로비전 송 콘테스트에는 마흔세개국이 참가했습니다. 작은 성취들을 축하하며, 자신감을 
     0.16s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: Forty-three countries participated in the Eurovision Song Contest 2018
     0.16s  user  발화 끝
     0.18s  <ret> 발화 (turn14 첫 프레임)
     0.24s  user  발화 시작: 아, 맞아, 기억난다. 이천십구년은 몇 개국이었지?
     0.24s  agent 발화 끝
     0.26s  <ret> 발화 (turn17 첫 프레임)
     0.28s  agent 발화 시작: <ret> 이천십구년에는 마흔한개국이 참가했어요. 잠시 숨을 고르며, 마음의 평화를 찾아보세요.
     0.28s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: Forty-one countries participated in the Eurovision Song Contest 2019.
     0.28s  user  발화 끝
     0.32s  <ret> 발화 (turn9 첫 프레임)
     0.32s  <ret> 발화 (turn12 첫 프레임)
     0.34s  user  발화 시작: 헐.
     0.34s  agent 발화 끝
     0.34s  user  발화 시작: 흐음… 이천이십년은 코로나 때문에 안 했잖아. 그럼 이천이십일년은?
     0.34s  user  발화 끝
     0.40s  agent 발화 시작: <ret> 이천이십일년 유로비전에는 서른아홉개국이 참가했습니다. 어려운 시기에도 긍정적인 마음을 유지하는 것
     0.40s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Thirty-nine countries participated in the Eurovision Song Contest 2021
     0.40s  user  발화 끝
     0.47s  user  발화 시작: 응.
     0.47s  agent 발화 끝
     0.48s  user  발화 시작: 이천이십이년은?
     0.48s  user  발화 끝
     0.48s  agent 발화 시작: <ret> 이천이십이년에는 마흔개국이 참가했습니다. 작은 변화를 시도하며, 새로운 가능성을 발견해 보세요.
     0.48s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Forty countries participated in the Eurovision Song Contest 2022.
     0.48s  user  발화 끝
     0.55s  user  발화 시작: 이천이십삼년은 또 몇 개국이었지?
     0.55s  agent 발화 끝
     0.58s  agent 발화 시작: <ret> 이천이십삼년 유로비전에는 서른일곱개국이 참가했어요. 지금 이 순간에 집중하며, 행복을 느껴보세요.
     0.58s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Thirty-seven countries participated in the Eurovision Song Contest 202
     0.58s  user  발화 끝
     0.59s  <ret> 발화 (turn21 첫 프레임)
     0.64s  user  발화 시작: 응.
     0.64s  agent 발화 끝
     0.65s  user  발화 시작: 이천이십사년에는?
     0.65s  user  발화 끝
     0.66s  agent 발화 시작: <ret> 이천이십사년에는 서른여덟개국이 참가했습니다. 자신을 소중히 여기고, 스스로에게 친절하게 대하세요.
     0.66s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: Thirty-eight countries participated in the Eurovision Song Contest 202
     0.66s  user  발화 끝
     0.72s  user  발화 시작: [happy] 어, 생각보다 많이 변하네!
     0.72s  agent 발화 끝
     0.75s  agent 발화 시작: 맞아요, 매년 조금씩 달라지는 모습이 흥미롭죠.
     0.75s  user  발화 끝
     0.79s  user  발화 시작: 그럼 이번 주 토요일에 서울 날씨는 어때?
     0.79s  agent 발화 끝
     0.83s  agent 발화 시작: <ret> 이번 주 토요일 서울 날씨는 이십팔도, 습도 육십오퍼센트, 바람은 시속 삼킬로미터로, 부분적으로 
     0.83s  ⚡SPAN 주입 [d'=0.13s / d_lead=0.13s]: (tool result) 28.0°C, humidity 65%, wind 3.0 km/h, condition: Partly C
     0.83s  user  발화 끝
     0.96s  user  발화 시작: 어.
     0.96s  agent 발화 끝
     0.97s  user  발화 시작: 고마워, 카리이아.
     0.97s  user  발화 끝
     0.98s  agent 발화 시작: 도움이 되었다니 기쁩니다.
     0.98s  user  발화 끝
     1.00s  agent 발화 끝
