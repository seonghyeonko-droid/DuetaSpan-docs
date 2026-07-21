# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "민람",
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
#       "date": "2026-06-03",
#       "category": "phone",
#       "text": "User uses a Pixel 8."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "emergency",
#       "text": "User's emergency contact is Sara."
#     },
#     {
#       "date": "2026-05-15",
#       "category": "dislike",
#       "text": "User can't stand licorice."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "partner",
#       "text": "User's partner is named Kenji."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "employer",
#       "text": "User works at a logistics company."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "floor",
#       "text": "User lives on the 7th floor."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-28",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2026-02-06",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 환불 좀 해 주세요. 스무다섯 달러 오십센트요. 캡처 아이 디 | S2 알겠습니다. 이번 주말에 여행 가는데, 짐을 어떻게 싸야 할까 | S3 음… | S4 좋은 조언 감사합니다.

     0.00s  user  발화 시작: 환불 좀 해 주세요. 스무다섯 달러 오십센트요. 캡처 아이 디는 C-one-two-three-four-fiv
     9.85s  agent 발화 시작: 네.
    10.53s  agent 발화 끝
    12.35s  <ret> 발화 (turn2 첫 프레임)
    12.80s  agent 발화 시작: <ret> 네, 환불 요청해 드렸어요. 환불 아이 디는 R-four-five-six-seven-eight-n
    12.89s  user  발화 끝
    13.48s  ⚡SPAN 주입 [d'=1.13s / d_lead=11.51s]: (tool result) {"refund id": "R-four-five-six-seven-eight-nine-zero-one
    21.12s  user  발화 시작: 맞아.
    21.75s  user  발화 끝
    24.13s  user  발화 시작: 아, 잠깐만요. 캡처 아이 디가 틀렸어요. C-one-two-three-four-five-six-seven-
    24.31s  agent 발화 끝
    33.96s  <ret> 발화 (turn5 첫 프레임)
    34.39s  agent 발화 시작: <ret> 캡처 아이 디를 수정해서 다시 환불 요청을 보냈어요. 새로운 환불 아이 디는 R-one-two-t
    34.47s  user  발화 끝
    34.81s  ⚡SPAN 주입 [d'=0.85s / d_lead=10.62s]: (tool result) {"refund id": "R-one-two-three-four-five-six-seven-eight
    44.94s  agent 발화 시작: 금액은 동일하게 이십오 점 오달러입니다.
    45.01s  agent 발화 끝
    47.62s  user  발화 시작: 알겠습니다. 이번 주말에 여행 가는데, 짐을 어떻게 싸야 할까요?
    47.94s  agent 발화 끝
    51.59s  agent 발화 시작: [happy] 여행 준비하시는군요! 짐은 최대한 가볍게 싸는 게 중요해요. 옷은 돌돌 말아서 공간을 절약하고
    51.69s  user  발화 끝
    56.14s  user  발화 시작: 어.
    56.58s  user  발화 끝
    61.14s  agent 발화 끝
    61.63s  user  발화 시작: 음…
    62.13s  user  발화 끝
    62.62s  agent 발화 시작: 신발은 부피가 크니까, 가장 편한 신발 두 켤레 정도만 가져가시는 게 좋을 것 같아요. 세면도구는 작은 용기
    68.87s  user  발화 시작: 응.
    69.32s  user  발화 끝
    70.84s  agent 발화 시작: 혹시 비행기에서 불편할까 봐 목베개나 안대도 챙기시면 좋을 거예요. 그리고 중요한 서류는 꼭 가방 안에 넣어
    70.97s  agent 발화 끝
    79.05s  agent 발화 끝
    79.48s  user  발화 시작: 좋은 조언 감사합니다.
    80.89s  agent 발화 시작: 제 여행 팁이 도움이 되셨다니 기쁘네요. 제 경험상, 여행 전에 미리 여행지에 대한 정보를 찾아보는 것도 중
    81.09s  user  발화 끝
    90.53s  agent 발화 끝
