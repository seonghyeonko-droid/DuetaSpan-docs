# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "세국",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-05-08",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-16",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아이들 방학 때 뭐 할지 좀 알아봐 줘. 특별한 건 말고, 그 | S2 칠월 십오일부터라고? 아, 이번 주말은 안 하는구나. | S3 잠깐만, 혹시 코엑스 공룡전시 티켓 예매도 도와줄 수 있어?  | S4 응, 부탁해. 어른 두 명, 아이 두 명으로 예매해 줘.

     0.00s  user  발화 시작: 아이들 방학 때 뭐 할지 좀 알아봐 줘. 특별한 건 말고, 그냥 아이들이 좋아할 만한 거.
     7.40s  <ret> 발화 (turn1 첫 프레임)
     7.51s  agent 발화 시작: <ret> 서울에서 아이들이 좋아할 만한 행사들이 많이 있네요. 코엑스 아쿠아리움에서 공룡 전시를 하고, 국
     7.51s  user  발화 끝
     8.17s  ⚡SPAN 주입 [d'=0.77s / d_lead=7.51s]: There are several family-friendly events happening in Seoul during the
    15.02s  user  발화 시작: 그렇죠.
    15.02s  agent 발화 끝
    15.49s  user  발화 시작: 아, 국립극장 연극이 뭔지 좀 더 자세히 알려줄 수 있어?
    15.49s  user  발화 끝
    20.18s  agent 발화 시작: 음.
    20.18s  user  발화 끝
    20.51s  <ret> 발화 (turn5 첫 프레임)
    20.65s  agent 발화 시작: <ret> 국립극장에서는 이천이십육년 칠월 십오일부터 이십일까지 매일 오후 두시와 다섯시에 '어린 왕자'라는
    20.65s  agent 발화 끝
    20.91s  ⚡SPAN 주입 [d'=0.39s / d_lead=7.04s]: The National Theater is hosting a children's play titled "The Little P
    27.69s  user  발화 시작: 칠월 십오일부터라고? 아, 이번 주말은 안 하는구나.
    27.69s  agent 발화 끝
    30.98s  agent 발화 시작: 네, 이번 주말은 아니네요. 다음 주부터 시작이에요. 혹시 다른 공연도 알아볼까요?
    30.98s  user  발화 끝
    36.14s  user  발화 시작: 네.
    36.14s  agent 발화 끝
    36.61s  user  발화 시작: 잠깐만, 혹시 코엑스 공룡전시 티켓 예매도 도와줄 수 있어? —
    36.61s  user  발화 끝
    41.31s  user  발화 시작: …아니, 혹시 지금 할인하는 티켓 같은 건 없을까?
    41.31s  user  발화 끝
    44.87s  <ret> 발화 (turn11 첫 프레임)
    45.06s  agent 발화 시작: <ret> 코엑스 공룡 전시 티켓은 온라인으로 구매하면 이십퍼센트 할인을 받을 수 있고, 이천이십육년 칠월 
    45.06s  user  발화 끝
    45.79s  ⚡SPAN 주입 [d'=0.92s / d_lead=9.86s]: {"event": "Dinosaur Exhibition", "location": "COEX Aquarium", "date": 
    54.92s  agent 발화 시작: 예매를 도와드릴까요?
    54.92s  agent 발화 끝
    55.86s  user  발화 시작: 응, 부탁해. 어른 두 명, 아이 두 명으로 예매해 줘.
    55.86s  agent 발화 끝
    60.55s  agent 발화 시작: 맞아요.
    60.55s  user  발화 끝
    61.01s  <ret> 발화 (turn15 첫 프레임)
    61.02s  agent 발화 시작: <ret> 이천이십육년 칠월 십육일 오후 두시에 코엑스 아쿠아리움에서 어른 두 명, 아이 두 명으로 공룡 전
    61.02s  agent 발화 끝
    61.75s  ⚡SPAN 주입 [d'=0.74s / d_lead=11.73s]: (tool result) Booking confirmed for Dinosaur Exhibition at COEX Aquari
    72.75s  agent 발화 끝
