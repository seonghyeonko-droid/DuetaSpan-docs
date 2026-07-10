# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "준진",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-12",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-11-01",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-14",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 요즘 여행 계획 세우고 있는데, 혹시 이천이십이년 | S2 현대적인 건축물이라고 하니까 궁금한데요… | S3 사막 장미에서 영감을 받았다니, 정말 독특하네요— | S4 배송 컨테이너로 지어졌다고요? 와, 정말 신기하네요! 그런 경

     0.00s  user  발화 시작: 안녕하세요. 요즘 여행 계획 세우고 있는데, 혹시 이천이십이년에 월드컵이 어디서 열렸는지 아세요?
     6.12s  <ret> 발화 (turn1 첫 프레임)
     6.44s  agent 발화 시작: <ret> 이천이십이년 월드컵은 이천이십이년 십일월 이십일부터 십이월 십팔일까지 카타르에서 열렸습니다.
     6.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.62s]: Qatar hosted the 2022 FIFA World Cup from 20 November to 18 December 2
     6.58s  user  발화 끝
    13.04s  user  발화 시작: 카타르요? 음, 사실 카타르는 잘 몰라서… 거긴 어떤 곳이에요?
    13.05s  agent 발화 끝
    18.18s  agent 발화 시작: 카타르는 아라비아반도에 위치한 작은 나라인데, 현대적인 건축물과 전통적인 문화가 공존하는 곳이에요.
    18.32s  user  발화 끝
    24.92s  user  발화 시작: 현대적인 건축물이라고 하니까 궁금한데요…
    25.04s  agent 발화 끝
    27.69s  user  발화 끝
    29.79s  user  발화 시작: …혹시 카타르에 유명한 건축물이 있을까요?
    31.89s  <ret> 발화 (turn6 첫 프레임)
    32.20s  agent 발화 시작: <ret> 장 누벨이 설계한 카타르 국립 박물관은 이천십구년 삼월에 개관했는데, 사막 장미에서 영감을 받았다
    32.21s  ⚡SPAN 주입 [d'=0.96s / d_lead=7.13s]: The National Museum of Qatar, designed by Jean Nouvel, opened in March
    32.37s  user  발화 끝
    37.58s  user  발화 시작: 네.
    38.03s  user  발화 끝
    39.21s  user  발화 시작: 사막 장미에서 영감을 받았다니, 정말 독특하네요—
    39.33s  agent 발화 끝
    42.55s  user  발화 시작: …근데 월드컵 경기장들은 다 어떻게 생겼어요?
    42.77s  user  발화 끝
    45.57s  <ret> 발화 (turn10 첫 프레임)
    45.81s  agent 발화 시작: <ret> 이천이십이년 월드컵에 사용된 구백칠십사 스타디움은 배송 컨테이너와 강철로 지어졌다고 합니다.
    45.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.35s]: Stadium 974, used during the 2022 FIFA World Cup, was built using ship
    45.93s  user  발화 끝
    49.44s  user  발화 시작: 예.
    49.94s  user  발화 끝
    52.15s  agent 발화 끝
    52.30s  user  발화 시작: 배송 컨테이너로 지어졌다고요? 와, 정말 신기하네요! 그런 경기장이 있다니.
    57.53s  agent 발화 시작: 네, 정말 독특하죠. 지속 가능성을 고려한 디자인이라고 해요. 카타르 여행하시면 꼭 한번 방문해 보세요.
    57.76s  user  발화 끝
    63.27s  agent 발화 끝
