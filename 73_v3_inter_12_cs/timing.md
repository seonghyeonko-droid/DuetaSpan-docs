# v3_inter_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어, 그래서 미국에서 Father’s Day를 누가 시작했어?
     4.22s  agent 발화 시작: 좋은 질문인데, 생각보다 최근의 전통이야.
     4.22s  user  발화 끝
     7.23s  user  발화 시작: 음, 위원회였어 아니면— 그냥 한 사람이야?
     7.23s  agent 발화 끝
    10.85s  agent 발화 시작: <ret> 말씀하신 거에 대해 알려줄게. 미국에서 Father’s Day를 시작한 사람으로 여겨지는 건 So
    10.85s  <ret> 발화 (turn3 첫 프레임)
    10.85s  user  발화 끝
    11.85s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.41s]: Sonora Smart Dodd is considered the founder of Father’s Day in the Uni
    21.70s  user  발화 시작: Dodd… 이름이 좀 특이하네. 정확히 무슨 이유로 그랬어?
    21.70s  agent 발화 끝
    26.52s  agent 발화 시작: 어머니를 기리는 것처럼 아버지도 기리고 싶어했어.
    26.52s  user  발화 끝
    30.14s  user  발화 시작: [sigh] 결국 Mother’s Day를 따라 하는 거잖아, 항상.
    30.14s  agent 발화 끝
    34.96s  agent 발화 시작: <ret> 재미있는 건… Dodd가 1910년에 워싱턴주 스포케인에서 처음 Father’s Day를 제안했어
    34.96s  <ret> 발화 (turn7 첫 프레임)
    34.96s  user  발화 끝
    35.36s  ⚡SPAN 주입 [d'=0.40s / d_lead=1.21s]: Dodd proposed the first Father’s Day in 1910 in Spokane, Washington.
    42.79s  user  발화 시작: 1910년… 백 년이 넘었네! 바로 유행했어?
    42.79s  agent 발화 끝
    46.41s  agent 발화 시작: 바로 그렇게 되진 않았어. 자리를 잡는 데 시간이 좀 걸렸지.
    46.41s  user  발화 끝
    52.44s  user  발화 시작: 그럼, 그때는 공식적인 holiday가 아니었어?
    52.44s  agent 발화 끝
    55.45s  agent 발화 시작: <ret> 처음부터 공식적인 holiday로 인정받은 건 아니야. Father’s Day가 공식적으로 hol
    55.45s  <ret> 발화 (turn11 첫 프레임)
    55.45s  user  발화 끝
    56.45s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.81s]: Father’s Day wasn’t officially recognized as a holiday until 1972.
    66.30s  user  발화 시작: 와, 72년… 그건—
    66.30s  agent 발화 끝
    68.11s  agent 발화 시작: 달력에 추가된 건 꽤 늦은 편이야—
    68.11s  user  발화 끝
    71.73s  user  발화 시작: 사실, 역사는 됐어. 초콜릿 mousse 레시피 좀 알려줘.
    71.73s  agent 발화 끝
    76.55s  agent 발화 시작: 오, 좋은 부탁이야! 클래식한 초콜릿 mousse는 언제나 좋은 선택이지.
    76.55s  user  발화 끝
    81.97s  user  발화 시작: 누군가를 감동시키려고 하는 거라 좀… 특별한 걸로.
    81.97s  agent 발화 끝
    86.19s  agent 발화 시작: 정말 인상적인 mousse를 만들려면 Valrhona 초콜릿을 써야 해.
    86.19s  user  발화 끝
    91.01s  user  발화 시작: Valrhona… 비싸?
    91.01s  agent 발화 끝
    92.22s  agent 발화 시작: <ret> 투자라고 생각하면 돼. Valrhona Guanaja 70% 다크 초콜릿 300그램 바가 55달러
    92.22s  <ret> 발화 (turn19 첫 프레임)
    92.22s  user  발화 끝
    92.70s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.81s]: A three hundred gram bar of Valrhona Guanaja seventy percent dark choc
   102.47s  agent 발화 끝
