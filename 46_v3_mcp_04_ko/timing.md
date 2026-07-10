# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "시호",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-05-30",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-16",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: [um, 혹시 웹 브라우저 사용자 에이전트를 변경해 줄 수 있을까요? 슈퍼크롤러 버전 십 점 일로요.]
     6.53s  <ret> 발화 (turn1 첫 프레임)
     6.62s  user  발화 끝
     6.92s  agent 발화 시작: <ret> 사용자 에이전트를 변경해 드리겠습니다. 사용자 에이전트를 슈퍼크롤러 버전 십 점 일로 설정했습니다
     7.57s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.11s]: (tool result) User agent set to SuperCrawler version 10.1.
    11.00s  user  발화 시작: 맞아요.
    11.63s  user  발화 끝
    15.87s  agent 발화 끝
    16.21s  user  발화 시작: [아, 네, 잘 됐는지 확인하고 싶은데, 지금 제 아이피 주소는 어디로 보이나요?]
    20.56s  <ret> 발화 (turn4 첫 프레임)
    20.80s  agent 발화 시작: <ret> 현재 아이피 주소는 서울, 대한민국으로 보입니다. 혹시 다른 지역으로 보이나요?
    20.93s  user  발화 끝
    22.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.67s]: (tool result) 127.0.0.1, Seoul, South Korea
    25.48s  agent 발화 끝
    25.72s  user  발화 시작: [음, 서울이 맞는데… 지금 날씨는 어때요?]
    28.72s  <ret> 발화 (turn6 첫 프레임)
    28.79s  agent 발화 시작: <ret> 서울의 현재 날씨를 알려드리겠습니다. 서울은 현재 섭씨 이십팔도이고, 습도는 육십오%, 바람은 시
    28.91s  user  발화 끝
    29.22s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.11s]: (tool result) 28.0°C, humidity 65%, wind 3.2 km/h
    39.36s  agent 발화 끝
