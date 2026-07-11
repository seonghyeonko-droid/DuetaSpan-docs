# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Zoe",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-23",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-09-13",
#       "category": "home",
#       "text": "User's home address is 150 Pine Court."
#     },
#     {
#       "date": "2025-08-22",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-29",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 항저우에서 시안까지 자가용으로 가면 얼마나 걸릴까요? | S2 꽤 괜찮은데요. 다음 토요일에 방이 있는지 확인해 줄 수 있을 | S3 좋아요. 그럼 다시 호텔 얘기로 돌아가서, 하얏트 리젠시 호텔 | S4 저도 그렇게 생각해요. 마지막으로 한 가지만 더…

     0.00s  user  발화 시작: 항저우에서 시안까지 자가용으로 가면 얼마나 걸릴까요?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn6 첫 프레임)
     0.02s  agent 발화 시작: <ret> 음, 항저우에서 시안까지는 대략 천백육십일 점 삼 킬로미터 정도 돼. 운전하면 한 열세 시간 삼십
     0.02s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) {"distance": "1161.3 km", "duration": "13 hr 37 min"}
     0.02s  user  발화 끝
     0.10s  user  발화 시작: 와, 정말 오래 가네요. 가는 길에 볼 만한 게 있을까요?
     0.10s  agent 발화 끝
     0.14s  agent 발화 시작: 거리가 꽤 되네, 그렇지. 그런 긴 여행은 중간에 쉬어가는 곳을 정하는 게 좋겠어! 혹시 볼거리를 찾아줄까?
     0.14s  user  발화 끝
     0.20s  user  발화 시작: 음.
     0.20s  agent 발화 끝
     0.21s  user  발화 시작: 사실, 쉬는 곳을 정하기 전에 정저우에 있는 호텔을 좀 찾아줄 수 있을까요? 중간 지점인 것 같아서요.
     0.21s  user  발화 끝
     0.27s  agent 발화 시작: <ret> 정저우 하얏트 리젠시 호텔이 있어. 진수이로 백이십팔번지에 있고, 지금은 밤에 육백팔십팔 위안 정
     0.27s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) {"hotel name": "Hyatt Regency Zhengzhou", "address": "No
     0.27s  user  발화 끝
     0.33s  user  발화 시작: 꽤 괜찮은데요. 다음 토요일에 방이 있는지 확인해 줄 수 있을까요?
     0.33s  agent 발화 끝
     0.37s  agent 발화 시작: 다음 토요일, 칠월 십팔일, 정저우 하얏트 리젠시 호텔의 방 여부를 확인해 볼게…
     0.37s  user  발화 끝
     0.37s  <ret> 발화 (turn10 첫 프레임)
     0.41s  user  발화 시작: …아, 호텔은 됐어요. 그럼 시안 다음 토요일 날씨는 어때요?
     0.41s  agent 발화 끝
     0.45s  agent 발화 시작: <ret> 다음 토요일, 칠월 십팔일 시안 날씨는 맑고, 기온은 삼십이 점 오 도야. 습도는 육십오 퍼센트,
     0.45s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) {"temperature": "32.5°C", "humidity": "65%", "wind speed
     0.45s  user  발화 끝
     0.53s  <ret> 발화 (turn15 첫 프레임)
     0.54s  user  발화 시작: 아.
     0.54s  agent 발화 끝
     0.55s  agent 발화 시작: 날씨가 좋네! 좀 더울 수도 있겠지만, 여행하기 딱 좋을 것 같아. 특히 장거리 여행에서는 날씨를 미리 알아
     0.55s  user  발화 끝
     0.62s  user  발화 시작: 아.
     0.62s  agent 발화 끝
     0.63s  user  발화 시작: 좋아요. 그럼 다시 호텔 얘기로 돌아가서, 하얏트 리젠시 호텔 방을 다음 토요일에 예약해 줄 수 있을까요?
     0.63s  user  발화 끝
     0.69s  agent 발화 시작: <ret> 정저우 하얏트 리젠시 호텔 방이 이천이십육년 칠월 십팔일에 예약됐어. 예약 확인 번호는 Z X H
     0.69s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) {"confirmation number": "ZXH78945", "check in date": "20
     0.69s  user  발화 끝
     0.77s  user  발화 시작: 와.
     0.77s  agent 발화 끝
     0.78s  user  발화 시작: 좋아요! 완벽하네요. 도와주셔서 정말 감사합니다.
     0.78s  user  발화 끝
     0.80s  agent 발화 시작: 천만에. 여행 준비하는 데 도움이 됐다니 기쁘네. 정말 멋진 모험이 될 것 같아!
     0.80s  user  발화 끝
     0.85s  user  발화 시작: 저도 그렇게 생각해요. 마지막으로 한 가지만 더…
     0.85s  agent 발화 끝
     0.88s  user  발화 시작: …다시 한번 운전 시간을 알려줄 수 있을까요?
     0.88s  user  발화 끝
     0.90s  agent 발화 시작: 항저우에서 시안까지 운전하면 대략 열세 시간 삼십칠 분 정도 걸리고, 천백육십일 점 삼 킬로미터야.
     0.90s  user  발화 끝
     0.96s  agent 발화 시작: 중간에 쉬는 시간이나 구경하는 시간도 잊지 말고 꼭 챙겨야 해!
     0.96s  agent 발화 끝
     1.00s  agent 발화 끝
