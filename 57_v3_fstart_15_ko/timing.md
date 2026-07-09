# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Ada · Location: Sydney, Australia · Nationality: Australian · Gender: female · Age: 50s · TZ: Australia/Sydney (AEDT, UTC+11) · Currency: AUD ($)
#   B. 저장 메모리:
#      [2026-08-03] User works as a physical therapist.
#      [2026-07-09] User is into rock climbing.
#      [2026-06-08] User's favorite cuisine is Mexican.
#      [2026-06-02] User is allergic to pollen.
#      [2026-03-19] User is planning a trip to Switzerland in December.
#   B. 과거 대화 요약:
#      [2026-07-11] Apartment hunting downtown — wanted a pet-friendly building; budget for 2 bedrooms
#      [2026-01-08] Researching a used car — comparing hybrid models; wants under 30k miles

# EXAMINER(FDB-v2) 단계: S1 위치 좀 알려 줘. 시드니 오페라 하우스의 위도랑 경도. | S2 아, 아쉽다. 포시즌스는 어때? | S3 좋아. 취소 정책은 어떻게 돼? | S4 조식도 추가할 수 있어?

     0.00s  user  발화 시작: 위치 좀 알려 줘. 시드니 오페라 하우스의 위도랑 경도.
     4.34s  <ret> 발화 (turn1 첫 프레임)
     4.42s  agent 발화 시작: <ret> 알겠습니다. 그 유명한 랜드마크의 좌표를 찾아봤는데, 위도는 마이너스 삼십삼 점 팔오육팔, 경도는
     4.67s  user  발화 끝
     6.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.97s]: (tool result) The Sydney Opera House is located at -33.8568 degrees la
     9.05s  user  발화 시작: 응.
     9.63s  user  발화 끝
    15.08s  agent 발화 끝
    15.09s  user  발화 시작: 그 근처 호텔도 찾아 줘.
    16.25s  <ret> 발화 (turn4 첫 프레임)
    16.65s  agent 발화 시작: <ret> 네, 주변 호텔을 찾아볼 수 있습니다. 포시즌스는 육백오십 달러이고, 파크 하얏트는 칠백이십 달러
    16.83s  user  발화 끝
    18.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.84s]: (tool result) Four Seasons Hotel Sydney is 0.8 miles away, priced at $
    24.48s  user  발화 시작: 음, 파크 하얏트 좋긴 한데, 반려동물 동반 가능한가?
    24.52s  agent 발화 끝
    28.75s  <ret> 발화 (turn6 첫 프레임)
    29.14s  agent 발화 시작: <ret> 확인해 보는 게 좋겠네요. 아쉽게도 파크 하얏트 시드니는 반려동물을 받지 않습니다.
    29.20s  user  발화 끝
    30.59s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.26s]: (tool result) The Park Hyatt Sydney does not allow pets.
    35.11s  agent 발화 끝
    36.33s  user  발화 시작: 아, 아쉽다. 포시즌스는 어때?
    39.26s  <ret> 발화 (turn8 첫 프레임)
    39.47s  user  발화 끝
    39.65s  agent 발화 시작: <ret> 포시즌즈의 반려동물 정책을 확인해 볼게요. 포시즌즈는 십 파운드 미만의 반려동물을 환영하며, 청소
    41.10s  ⚡SPAN 주입 [d'=1.84s / d_lead=5.73s]: (tool result) The Four Seasons Hotel Sydney allows pets under ten poun
    46.23s  user  발화 시작: 그니까.
    46.87s  user  발화 끝
    49.20s  agent 발화 끝
    49.26s  user  발화 시작: 다음 주말에 방 있는지 알아봐 줘.
    51.09s  <ret> 발화 (turn11 첫 프레임)
    51.38s  user  발화 끝
    51.41s  agent 발화 시작: <ret> 네, 다음 주말의 객실 상황을 확인해 봤습니다. 디럭스 하버뷰 룸이 있습니다.
    52.93s  ⚡SPAN 주입 [d'=1.84s / d_lead=4.21s]: (tool result) The Four Seasons Hotel Sydney has one room available nex
    57.19s  agent 발화 끝
    58.47s  user  발화 시작: 좋아. 취소 정책은 어떻게 돼?
    60.54s  <ret> 발화 (turn13 첫 프레임)
    60.85s  agent 발화 시작: <ret> 취소 조건에 대해 알아볼게요. 칠십이 시간 전까지 취소하시면 전액 환불받으실 수 있습니다.
    60.87s  user  발화 끝
    62.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.41s]: (tool result) Cancellations are permitted up to 72 hours before arriva
    62.86s  user  발화 시작: 응.
    63.30s  user  발화 끝
    66.69s  agent 발화 끝
    67.56s  user  발화 시작: 그거 괜찮네. 그 방 예약해 줘.
    69.37s  <ret> 발화 (turn16 첫 프레임)
    69.76s  agent 발화 시작: <ret> 잘 됐네요, 예약 도와드릴게요. 예약 완료되었습니다! 육백오십 달러에 반려동물 추가 요금 백 달러
    69.96s  user  발화 끝
    71.29s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.01s]: (tool result) Reservation confirmed: Deluxe Harbour View room at Four 
    73.83s  user  발화 시작: 응.
    74.28s  user  발화 끝
    78.94s  agent 발화 끝
    79.85s  user  발화 시작: 잠깐만.
    80.47s  user  발화 시작: 조식도 추가할 수 있어?
    80.67s  user  발화 끝
    82.14s  <ret> 발화 (turn20 첫 프레임)
    82.22s  agent 발화 시작: <ret> 네, 예약에 조식을 추가해 드릴게요. 조식은 하루에 60달러이며, 총 금액은 칠백십 달러에 반려동
    82.36s  user  발화 끝
    83.58s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.59s]: (tool result) Breakfast added to reservation XYL789: $60 per day. Tota
    85.34s  user  발화 시작: 응.
    85.75s  user  발화 끝
    89.39s  <ret> 발화 (turn22 첫 프레임)
    89.78s  agent 발화 시작: <ret> 숙박을 맞춤 설정해 드려서 기쁩니다. 업데이트된 총 금액은 칠백십 달러에 반려동물 요금이 추가되며
    89.91s  agent 발화 끝
    90.11s  ⚡SPAN 주입 [d'=0.72s / d_lead=3.91s]: (tool result) Reservation XYL789 updated: Deluxe Harbour View room, br
    95.57s  user  발화 시작: 응.
    96.07s  user  발화 끝
    98.72s  agent 발화 끝
    98.78s  user  발화 시작: 정말 고마워.
    99.96s  agent 발화 시작: 도와드릴 수 있어서 기쁩니다! 시드니에서 반려동물과 함께 즐거운 시간 보내시길 바랍니다. 가족과 함께 여행하
   100.15s  user  발화 끝
   109.32s  agent 발화 끝
