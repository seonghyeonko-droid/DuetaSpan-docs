# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "연린",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "work",
#       "text": "User works as a UX researcher."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "show",
#       "text": "User is currently watching a cooking competition show."
#     },
#     {
#       "date": "2026-05-26",
#       "category": "plant",
#       "text": "User is growing a lemon tree at home."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "floor",
#       "text": "User lives on the 3rd floor."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "dislike",
#       "text": "User can't stand natto."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "schedule",
#       "text": "User has a 9-to-6 weekday schedule."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-22",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-05-03",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     },
#     {
#       "date": "2025-12-11",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 덴버의 마운틴 로지 호텔… | S2 육백칠십오달러? 생각보다 비싸네. 더 저렴한 곳 찾아봐 줘. | S3 음… 거기는 수영장이 있어? | S4 그럼 햄튼 인으로 바꿔줘.

     0.00s  user  발화 시작: 덴버의 마운틴 로지 호텔…
     2.07s  user  발화 끝
     4.08s  user  발화 시작: …이천이십사년 오월 십일부터 삼박 예약 좀 해줘.
     5.34s  agent 발화 시작: 음.
     5.79s  agent 발화 끝
     7.14s  <ret> 발화 (turn3 첫 프레임)
     7.27s  agent 발화 시작: <ret> 마운틴 로지 호텔, 이천이십사년 오월 십일부터 삼박 예약이 완료되었어요. 총 금액은 육백칠십오달러
     7.44s  user  발화 끝
     8.23s  ⚡SPAN 주입 [d'=1.10s / d_lead=10.30s]: (tool result) {"confirmation id": "MX829Z", "hotel name": "Mountain Lo
    17.45s  user  발화 시작: 육백칠십오달러? 생각보다 비싸네. 더 저렴한 곳 찾아봐 줘.
    17.57s  agent 발화 끝
    21.39s  <ret> 발화 (turn5 첫 프레임)
    21.57s  agent 발화 시작: <ret> 덴버에는 계절과 편의시설에 따라 평균 객실 요금이 백달러에서 이백오십달러까지 다양한 호텔이 있어요
    21.66s  user  발화 끝
    22.34s  ⚡SPAN 주입 [d'=0.94s / d_lead=11.59s]: Denver has many hotels with average nightly rates ranging from $100 to
    29.25s  user  발화 시작: 어.
    29.79s  user  발화 끝
    33.16s  agent 발화 끝
    33.16s  user  발화 시작: 햄튼 인은 어때? 거기는 어떤 곳이야?
    35.41s  agent 발화 시작: 햄튼 인 덴버 다운타운은 무료 조식과 피트니스 센터를 갖춘 현대적인 호텔입니다. 평점이 사 점 이점 정도로 
    35.56s  user  발화 끝
    43.61s  agent 발화 끝
    43.94s  user  발화 시작: 음… 거기는 수영장이 있어?
    46.01s  agent 발화 시작: 수영장은 없지만, 근처에 공공 수영장이 몇 군데 있습니다—
    46.20s  user  발화 끝
    48.80s  user  발화 시작: … 잠깐만, 혹시 마운틴 로지에 취소 수수료가 붙는다면, 햄튼 인으로 바로 바꾸는 게 나을까?
    49.52s  agent 발화 끝
    54.11s  <ret> 발화 (turn12 첫 프레임)
    54.61s  agent 발화 시작: <ret> 마운틴 로지는 체크인 일흔두시간 전에 취소하면 전액 환불되지만, 일흔두시간 이내 취소 시에는 오십
    54.82s  user  발화 끝
    54.93s  ⚡SPAN 주입 [d'=0.82s / d_lead=8.95s]: (tool result) {"confirmation id": "MX829Z", "hotel name": "Mountain Lo
    59.21s  user  발화 시작: 응.
    59.80s  user  발화 끝
    63.50s  agent 발화 시작: 햄튼 인으로 변경하는 것은 언제든 가능합니다. 수수료를 고려하면 햄튼 인이 더 나은 선택일 수도 있겠네요.
    63.56s  agent 발화 끝
    66.82s  user  발화 시작: 어.
    67.45s  user  발화 끝
    70.58s  agent 발화 끝
    70.84s  user  발화 시작: 그럼 햄튼 인으로 바꿔줘.
    72.37s  <ret> 발화 (turn17 첫 프레임)
    72.54s  agent 발화 시작: <ret> [happy] 네, 햄튼 인 덴버 다운타운으로 변경되었어요. 확인번호는 엔 와이 일 사 칠 케이이
    72.59s  user  발화 끝
    73.70s  ⚡SPAN 주입 [d'=1.32s / d_lead=7.83s]: (tool result) {"confirmation id": "NY147K", "hotel name": "Hampton Inn
    77.50s  user  발화 시작: 응.
    77.95s  user  발화 끝
    80.22s  user  발화 시작: 오, 훨씬 저렴하네. 고마워.
    80.37s  agent 발화 끝
    82.76s  agent 발화 시작: 별말씀을요. 여행 준비 잘 하시고, 즐거운 시간 보내세요.
    82.81s  user  발화 끝
    87.06s  agent 발화 끝
