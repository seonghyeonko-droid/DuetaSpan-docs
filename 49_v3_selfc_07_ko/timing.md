# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "우호",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-12",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 저녁에 영화 보려고 하는데, 괜찮은 거 있을까요? | S2 예매는 나중에 할게요. 지금은 그냥 시간표만 보고 싶어요. | S3 아, 고마워요! — | S4 아야진 해변… 이름이 예쁘네요. 거기는 숙소는 어떤 게 있어요

     0.00s  user  발화 시작: 오늘 저녁에 영화 보려고 하는데, 괜찮은 거 있을까요?
     3.89s  agent 발화 시작: 네.
     3.89s  user  발화 끝
     4.37s  agent 발화 시작: 네, 어떤 장르를 좋아하시나요? 혹시 보고 싶으신 배우가 있으신가요?
     4.37s  agent 발화 끝
     8.74s  agent 발화 시작: 지금 바로 영화를 추천해 드리기는 어렵지만, 선호하시는 장르나 배우를 알려주시면 더 정확한 추천이 가능합니다
     8.74s  agent 발화 끝
    15.54s  user  발화 시작: 그래.
    15.54s  agent 발화 끝
    16.03s  user  발화 시작: 음… 로맨틱 코미디요. 요즘 좀 웃고 싶어서요.
    16.03s  user  발화 끝
    19.18s  <ret> 발화 (turn6 첫 프레임)
    19.43s  agent 발화 시작: <ret> '달콤한 거짓말'이라는 영화가 현재 상영 중이고, 평점은 팔 점 이점이라고 합니다.
    19.43s  user  발화 끝
    20.44s  ⚡SPAN 주입 [d'=1.26s / d_lead=5.34s]: (tool result) "영화 '달콤한 거짓말'이 현재 상영 중이며, 평점은 8.2점입니다."
    24.77s  user  발화 시작: 아, 그거 전에 광고에서 봤던 것 같아요. 괜찮아 보이던데.
    24.77s  agent 발화 끝
    29.15s  agent 발화 시작: 네.
    29.15s  user  발화 끝
    29.63s  agent 발화 시작: 광고에서 보셨군요! [happy] 평점도 높아서 재미있게 보실 수 있을 거예요. 예매를 도와드릴까요?
    29.63s  agent 발화 끝
    35.46s  user  발화 시작: 예매는 나중에 할게요. 지금은 그냥 시간표만 보고 싶어요.
    35.46s  agent 발화 끝
    39.33s  <ret> 발화 (turn11 첫 프레임)
    39.35s  agent 발화 시작: <ret> 오늘 저녁 일곱시와 아홉시 삼십분에 상영한다고 합니다.
    39.35s  user  발화 끝
    40.53s  ⚡SPAN 주입 [d'=1.21s / d_lead=3.40s]: (tool result) "오늘 저녁 7시, 9시 30분에 상영합니다."
    42.75s  user  발화 시작: 일곱시는 좀 이른 것 같고… 아홉시 삼십분으로 예매해 주세요.
    42.75s  agent 발화 끝
    47.12s  agent 발화 시작: 네, '달콤한 거짓말' 오늘 저녁 아홉시 삼십분으로 예매해 드리겠습니다. 몇 장 예매하시겠어요?
    47.12s  user  발화 끝
    52.95s  user  발화 시작: 두 장이요.
    52.95s  agent 발화 끝
    53.49s  <ret> 발화 (turn15 첫 프레임)
    53.79s  ⚡SPAN 주입 [d'=0.30s / d_lead=1.94s]: (tool result) "예매가 완료되었습니다. 예매번호는 12345678입니다."
    53.92s  agent 발화 시작: <ret> 혹시 멤버십 포인트 사용하시겠어요?
    53.92s  user  발화 끝
    55.86s  agent 발화 시작: 예매가 완료되었습니다. 예매번호는 일 이 삼 사 오 육칠 팔입니다.
    55.86s  agent 발화 끝
    60.72s  user  발화 시작: 아, 고마워요! —
    60.72s  agent 발화 끝
    62.18s  user  발화 시작: … 혹시, 이번 주말에 서울 말고 다른 데 갈만한 곳도 추천해 줄 수 있어요?
    62.18s  user  발화 끝
    68.98s  agent 발화 시작: 네네.
    68.98s  user  발화 끝
    69.46s  agent 발화 시작: 서울 외 다른 곳을 찾으시는군요. [curious] 어떤 분위기의 여행을 원하시나요? 바다, 산, 아니면 도
    69.46s  agent 발화 끝
    76.26s  user  발화 시작: 음… 바다가 좋겠어요. 조용하고 한적한 곳이면 더 좋고요.
    76.26s  agent 발화 끝
    80.15s  agent 발화 시작: 조용하고 한적한 바다… 그럼 강원도 고성이나 속초 쪽을 추천해 드릴게요.
    80.15s  user  발화 끝
    85.01s  agent 발화 시작: 고성이나 속초는 비교적 조용하고 아름다운 해변이 많습니다.
    85.01s  agent 발화 끝
    88.41s  user  발화 시작: 응.
    88.41s  agent 발화 끝
    88.89s  agent 발화 시작: 특히 고성의 아야진 해변은 한적하고 아름다운 곳으로 유명합니다. 바다와 숲이 어우러져서 힐링하기에 좋습니다.
    88.89s  user  발화 끝
    95.21s  user  발화 시작: 어.
    95.21s  agent 발화 끝
    95.70s  user  발화 시작: 아야진 해변… 이름이 예쁘네요. 거기는 숙소는 어떤 게 있어요?
    95.70s  user  발화 끝
    99.76s  <ret> 발화 (turn28 첫 프레임)
   100.07s  agent 발화 시작: <ret> 아야진 해변 근처에 '바다쉼터' 펜션이 있고, 일박에 십오만 원이라고 합니다.
   100.07s  user  발화 끝
   101.02s  ⚡SPAN 주입 [d'=1.26s / d_lead=4.86s]: (tool result) "아야진 해변 근처에 '바다쉼터' 펜션이 있습니다. 가격은 1박에 15만 원입니다."
   104.92s  user  발화 시작: 십오만 원이면 괜찮네요. 그럼 예약 좀 해 주세요.
   104.92s  agent 발화 끝
   108.28s  <ret> 발화 (turn30 첫 프레임)
   108.58s  ⚡SPAN 주입 [d'=0.30s / d_lead=4.86s]: (tool result) "예약이 완료되었습니다. 예약번호는 89012345입니다."
   108.81s  agent 발화 시작: <ret> 네, '바다쉼터' 펜션 이번 주말, 칠월 십이일에서 십삼일까지 예약해 드리겠습니다.
   108.81s  user  발화 끝
   113.67s  agent 발화 시작: 예약이 완료되었습니다. 예약번호는 팔 구 공 일 이 삼 사 오입니다.
   113.67s  agent 발화 끝
   119.01s  agent 발화 끝
