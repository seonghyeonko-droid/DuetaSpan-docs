# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "보원",
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
#       "date": "2026-03-10",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-01",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2025-12-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-10-02",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-09-10",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-05-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 오늘 날씨 어때? | S2 음… 잠깐만, 그럼 지금 몇 시지? | S3 아, 맞아. 근데 웹사이트 화면 캡처 좀 해 줄 수 있어? 전 | S4 …base sixty-four로 저장해 줘.

     0.00s  user  발화 시작: 혹시 오늘 날씨 어때?
     1.62s  <ret> 발화 (turn1 첫 프레임)
     1.86s  agent 발화 시작: <ret> 오늘 날씨는 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터로 불고 있어요.
     1.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.77s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
     2.02s  user  발화 끝
     8.60s  agent 발화 시작: 날씨가 좋으니 기분 전환 삼아 산책이라도 가시는 건 어떠세요?
     8.62s  agent 발화 끝
    12.22s  user  발화 시작: 음… 잠깐만, 그럼 지금 몇 시지?
    12.63s  agent 발화 끝
    14.86s  <ret> 발화 (turn4 첫 프레임)
    14.93s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오후 두시 삼십삼분이에요.
    14.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.67s]: (tool result) It is Friday, July 10, 2026 at 2:33 PM in Asia/Seoul rig
    14.99s  user  발화 끝
    19.61s  agent 발화 끝
    20.09s  user  발화 시작: 아, 맞아. 근데 웹사이트 화면 캡처 좀 해 줄 수 있어? 전체 페이지로…
    24.94s  user  발화 끝
    26.89s  user  발화 시작: …base sixty-four로 저장해 줘.
    28.99s  <ret> 발화 (turn7 첫 프레임)
    29.07s  agent 발화 시작: <ret> 네, 전체 페이지 화면 캡처를 base sixty-four 형식으로 저장했어요.
    29.07s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.35s]: (tool result) Screenshot saved as base64 encoded string: /9j/4AAQSkZJR
    29.15s  user  발화 끝
    33.41s  agent 발화 끝
