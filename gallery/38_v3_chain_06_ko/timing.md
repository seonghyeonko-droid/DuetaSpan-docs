# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 시카고 일리노이에서 태국 음식점 좀 찾아 주세요.
     3.84s  user  발화 끝
     4.16s  <ret> 발화 (turn1 첫 프레임)
     4.24s  agent 발화 시작: <ret> 네, 시카고에 있는 태국 음식점을 알아봤는데요, 타이 당, 스타 오브 시암, 아룬스 타이 레스토랑
     5.60s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.32s]: (tool result) Thai restaurants in Chicago include Thai Dang, Star of S
    12.77s  agent 발화 끝
    12.85s  user  발화 시작: 아, 타이 당이 괜찮아 보이네요. 주소가 어떻게 되나요?
    15.64s  <ret> 발화 (turn3 첫 프레임)
    16.03s  agent 발화 시작: <ret> 네, 바로 찾아 드릴게요… 타이 당은 일리노이주 시카고 노스 브로드웨이 4339번지에 위치하고 있
    16.09s  user  발화 끝
    17.16s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.49s]: (tool result) Thai Dang is located at 4339 N Broadway, Chicago, IL 606
    26.12s  user  발화 시작: 거기 내일 저녁 7시에 두 명 예약해 주실 수 있나요?
    26.33s  agent 발화 끝
    29.17s  <ret> 발화 (turn5 첫 프레임)
    29.49s  agent 발화 시작: <ret> 예약 도와드릴 수 있어서 기뻐요… 네, 타이 당에 내일 저녁 7시에 두 명으로 예약 완료됐습니다.
    29.72s  user  발화 끝
    31.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.98s]: (tool result) Your reservation for two at Thai Dang tomorrow at 7:00 P
    38.43s  agent 발화 끝
