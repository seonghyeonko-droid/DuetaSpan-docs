# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "준은",
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
#       "date": "2026-06-04",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-11-24",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-28",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 보스턴에 있는 미술관 좀 찾아줄래? | S2 팔분이면 괜찮은데, 지금 당장 길 안내 시작해 줘. | S3 아, 그렇구나… — | S4 한일관이 좀 더 가깝네, 거기 예약해 줄 수 있어?

     0.00s  user  발화 시작: 보스턴에 있는 미술관 좀 찾아줄래?
     2.36s  <ret> 발화 (turn1 첫 프레임)
     2.60s  agent 발화 시작: <ret> 보스턴에는 미술관이 여러 곳 있는데, 미술관은 사십오만 점 이상의 작품을 소장하고 있고, 이사벨라
     2.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.88s]: (tool result) Boston has several museums, including the Museum of Fine
     2.60s  user  발화 끝
    12.48s  user  발화 시작: 음, 가드너 미술관이 더 끌리는데, 거기는 어떻게 가?
    12.48s  agent 발화 끝
    16.40s  <ret> 발화 (turn3 첫 프레임)
    16.64s  agent 발화 시작: <ret> 이사벨라 스튜어트 가드너 미술관까지는 삼 점 칠킬로미터, 자동차로 약 팔분, 대중교통으로는 삼십오
    16.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.28s]: (tool result) Directions to Isabella Stewart Gardner Museum, 25 Evans 
    16.64s  user  발화 끝
    23.91s  user  발화 시작: 팔분이면 괜찮은데, 지금 당장 길 안내 시작해 줘.
    23.91s  agent 발화 끝
    28.07s  agent 발화 시작: 지금 바로 길 안내를 시작할게요.
    28.07s  user  발화 끝
    30.67s  user  발화 시작: 잠깐만, 혹시 그 미술관에 한국어 오디오 가이드가 있어?
    30.67s  agent 발화 끝
    34.51s  <ret> 발화 (turn7 첫 프레임)
    34.83s  agent 발화 시작: <ret> 길 안내 전에 알아두면 좋을 것 같아요. 이사벨라 스튜어트 가드너 미술관에서는 영어, 스페인어, 
    34.83s  user  발화 끝
    35.87s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.64s]: The Isabella Stewart Gardner Museum offers audio guides in English, Sp
    46.79s  user  발화 시작: 아, 그렇구나… —
    46.79s  agent 발화 끝
    48.35s  user  발화 시작: …그럼, 혹시 근처에 한국 음식점은 있어?
    48.35s  user  발화 끝
    51.07s  <ret> 발화 (turn10 첫 프레임)
    51.47s  agent 발화 시작: <ret> 근처 한국 음식점으로는 한일관이 일 점 삼킬로미터, 별점 사 점 육점이고, 샤부젠 보스턴이 일 점
    51.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.40s]: (tool result) Nearby Korean restaurants include Han Il Kwan (0.8 miles
    51.47s  user  발화 끝
    61.87s  user  발화 시작: 어.
    61.87s  agent 발화 끝
    62.39s  agent 발화 시작: 맛있는 식사 하실 수 있겠네요.
    62.39s  user  발화 끝
    64.99s  user  발화 시작: 한일관이 좀 더 가깝네, 거기 예약해 줄 수 있어?
    64.99s  agent 발화 끝
    69.58s  <ret> 발화 (turn14 첫 프레임)
    69.66s  agent 발화 시작: <ret> 한일관 보스턴에 칠월 십일 저녁 일곱시에 두명 예약이 확정되었습니다. 확인 번호는 팔 이 구 엑스
    69.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.32s]: (tool result) Reservation confirmed for 2 people at Han Il Kwan, Bosto
    69.66s  user  발화 끝
    77.98s  user  발화 시작: 진짜?
    77.98s  agent 발화 끝
    78.50s  user  발화 시작: 고마워, 덕분에 오늘 계획 잘 세운 것 같아!
    78.50s  user  발화 끝
    82.66s  agent 발화 시작: 제가 도와드릴 수 있어서 기뻐요. 즐거운 시간 보내세요!
    82.66s  user  발화 끝
    86.82s  agent 발화 끝
