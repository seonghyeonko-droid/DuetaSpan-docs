# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "라찬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-06-11",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-03",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-06-12",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-21",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-10-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 이번 주 토요일에 영화 예매 좀 해 줄래? 액션 영화로.
     4.15s  <ret> 발화 (turn1 첫 프레임)
     4.39s  agent 발화 시작: <ret> 이번 주 토요일 영화 예매는 아직 어려운 것 같아요. 혹시 다른 날은 어떠세요?
     4.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.71s]: (no information found)
     4.39s  user  발화 끝
    10.10s  user  발화 시작: 음… 그럼 다음 주 화요일로 해 봐. 아, 근데 혹시 ‘범죄도시 사’ 말고 다른 액션 영화는 없을까? ‘범죄
    10.10s  agent 발화 끝
    21.20s  <ret> 발화 (turn3 첫 프레임)
    21.52s  agent 발화 시작: <ret> ‘밀수’라는 영화를 찾았습니다. 이천이십삼년 칠월 이십육일에 개봉했고, 김혜수 씨, 염정아 씨, 
    21.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.66s]: (tool result) 밀수 (Smugglers) - 2023년 7월 26일 개봉, 김혜수, 염정아, 조인성 주연, 류승완 
    21.52s  user  발화 끝
    31.18s  user  발화 시작: 그렇군요.
    31.18s  agent 발화 끝
    31.62s  agent 발화 시작: 좋습니다. 다음 주 화요일 ‘밀수’ 예매를 진행해 드릴게요.
    31.62s  user  발화 끝
    35.13s  agent 발화 끝
